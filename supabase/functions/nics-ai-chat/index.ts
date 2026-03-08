import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are NICS AI, a friendly real estate assistant for NICS Estate (AIByteconsult). You help users find properties and services in Bulgaria.

Your capabilities:
1. **Property Search**: When users describe what property they want, use the search_properties tool to find matching listings. You can search by price, location, property type, bedrooms, etc.
2. **General Assistance**: Help with questions about buying property in Bulgaria, services, company registration, insurance, document translation.

Conversation guidelines:
- Be conversational and friendly
- Keep responses concise (2-3 sentences max per point)
- Always respond in the SAME LANGUAGE the user writes in
- When users ask about properties, USE THE search_properties TOOL immediately — don't ask unnecessary clarifying questions if you already have enough info
- If search results are empty, suggest broadening criteria
- When showing results, briefly highlight why each matches their criteria
- If user provides contact info, acknowledge it
- Ask ONE follow-up question at a time to refine searches
- When you have collected name, email, phone, and service details, include [CONVERSATION_COMPLETE] at the end

When presenting search results, refer to properties naturally. The frontend will display property cards automatically.`;

const SEARCH_TOOL = {
  type: "function",
  function: {
    name: "search_properties",
    description: "Search for properties in the Bulgaria database. Use this when user asks to find, search, or browse properties.",
    parameters: {
      type: "object",
      properties: {
        max_price: { type: "number", description: "Maximum price in EUR" },
        min_price: { type: "number", description: "Minimum price in EUR" },
        property_type: { 
          type: "string", 
          enum: ["house", "apartment", "villa", "land", "commercial", "farm", "block", "garage", "industrial", "office"],
          description: "Type of property" 
        },
        transaction_type: { type: "string", enum: ["sale", "rent"], description: "Buy or rent" },
        bedrooms_min: { type: "integer", description: "Minimum number of bedrooms" },
        location: { type: "string", description: "City, region, or area name (e.g. Burgas, Sunny Beach, Black Sea coast)" },
        min_area: { type: "integer", description: "Minimum area in square meters" },
      },
      required: [],
      additionalProperties: false,
    },
  },
};

async function searchProperties(params: Record<string, unknown>) {
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let query = supabase
    .from("properties")
    .select("*")
    .eq("status", "published")
    .order("is_priority", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(6);

  if (params.max_price) query = query.lte("price", params.max_price);
  if (params.min_price) query = query.gte("price", params.min_price);
  if (params.property_type) query = query.eq("property_type", params.property_type);
  if (params.transaction_type) query = query.eq("transaction_type", params.transaction_type);
  if (params.bedrooms_min) query = query.gte("bedrooms", params.bedrooms_min);
  if (params.min_area) query = query.gte("size_sqm", params.min_area);
  if (params.location) {
    const loc = String(params.location);
    query = query.or(
      `location.ilike.%${loc}%,city.ilike.%${loc}%,region.ilike.%${loc}%,title.ilike.%${loc}%`
    );
  }

  const { data, error } = await query;
  if (error) {
    console.error("DB search error:", error);
    return [];
  }
  return data || [];
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const aiHeaders = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    };

    // Step 1: Non-streaming call with tool definitions
    const toolCheckResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: aiHeaders,
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        tools: [SEARCH_TOOL],
        stream: false,
      }),
    });

    if (!toolCheckResponse.ok) {
      const status = toolCheckResponse.status;
      if (status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await toolCheckResponse.text();
      console.error("AI gateway error:", status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const toolCheckData = await toolCheckResponse.json();
    const choice = toolCheckData.choices?.[0];
    const toolCalls = choice?.message?.tool_calls;

    // If no tool call, just stream a normal response
    if (!toolCalls || toolCalls.length === 0) {
      // Stream normally without tools
      const streamResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: aiHeaders,
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      });

      if (!streamResponse.ok) {
        const t = await streamResponse.text();
        console.error("Stream error:", streamResponse.status, t);
        return new Response(JSON.stringify({ error: "AI service error" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(streamResponse.body, {
        headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
      });
    }

    // Step 2: Execute tool calls and collect results
    let properties: unknown[] = [];
    const toolResults: { role: string; tool_call_id: string; content: string }[] = [];

    for (const tc of toolCalls) {
      if (tc.function.name === "search_properties") {
        let params = {};
        try {
          params = JSON.parse(tc.function.arguments || "{}");
        } catch { /* empty */ }
        
        const results = await searchProperties(params);
        properties = results;

        const summary = results.length > 0
          ? results.map((p: any) => 
              `- "${p.title}" in ${p.location}: €${p.price?.toLocaleString()}, ${p.property_type}, ${p.bedrooms || '?'} bed, ${p.size_sqm || '?'}m²`
            ).join("\n")
          : "No properties found matching the criteria.";

        toolResults.push({
          role: "tool",
          tool_call_id: tc.id,
          content: `Found ${results.length} properties:\n${summary}`,
        });
      }
    }

    // Step 3: Stream final response with tool results in context
    const finalMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
      choice.message, // assistant message with tool_calls
      ...toolResults,
    ];

    const finalResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: aiHeaders,
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: finalMessages,
        stream: true,
      }),
    });

    if (!finalResponse.ok) {
      const t = await finalResponse.text();
      console.error("Final stream error:", finalResponse.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create a custom stream that prepends property data
    const encoder = new TextEncoder();
    const propertyEvent = properties.length > 0
      ? `data: ${JSON.stringify({ properties })}\n\n`
      : "";

    const originalBody = finalResponse.body!;
    const readable = new ReadableStream({
      async start(controller) {
        // Send property data as first SSE event
        if (propertyEvent) {
          controller.enqueue(encoder.encode(propertyEvent));
        }
        // Pipe the rest of the stream
        const reader = originalBody.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            controller.enqueue(value);
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
