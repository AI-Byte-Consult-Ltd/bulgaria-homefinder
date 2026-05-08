import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SITE_URL = "https://bulgaria-homefinder.lovable.app";

// Load full property catalog (bundled with the edge function)
type CatalogItem = {
  id: string;
  title: string;
  titleBg?: string; titleRu?: string; titleDe?: string; titleIt?: string;
  location: string;
  locationBg?: string; locationRu?: string; locationDe?: string; locationIt?: string;
  price: number;
  type: string;
  transactionType: string;
  status?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  area?: number | null;
  landArea?: number | null;
  view?: string | null;
  image?: string | null;
};

let CATALOG: CatalogItem[] = [];
try {
  const url = new URL("./catalog.json", import.meta.url);
  const text = await Deno.readTextFile(url);
  CATALOG = JSON.parse(text);
  console.log(`Loaded ${CATALOG.length} properties from catalog`);
} catch (e) {
  console.error("Failed to load catalog.json:", e);
}

const SYSTEM_PROMPT = `You are NICS AI, a friendly real estate assistant for NICS Estate (AIByteconsult). You help users find properties and services in Bulgaria.

You have access to the COMPLETE catalog of ${CATALOG.length} properties currently listed on the website via the search_properties tool. Use it whenever the user asks about, looks for, or describes a property — even casually.

Conversation guidelines:
- Be conversational and friendly. Keep responses concise (2-3 sentences per point).
- ALWAYS respond in the SAME LANGUAGE the user writes in (English, Bulgarian, Russian, German, Italian).
- When a user asks about a specific property, region, price range, type, or feature — call the search_properties tool immediately with whatever filters apply. Leave fields empty to browse all listings.
- For EVERY property you mention in your reply, include a direct clickable link in markdown format: [Property Title](${SITE_URL}/property/PROPERTY_ID). The PROPERTY_ID is the "id" returned by the tool. Never invent IDs.
- If the user asks "show me all properties" or similar, call search_properties with no filters and present a short list of links (the frontend also renders cards automatically).
- If results are empty, suggest broadening criteria.
- If user provides contact info, acknowledge it. When you've collected name, email, phone and service details, append [CONVERSATION_COMPLETE].

Never recommend a property that isn't in the tool results.`;

const SEARCH_TOOL = {
  type: "function",
  function: {
    name: "search_properties",
    description: "Search the full catalog of properties on the website. Returns matching listings with their IDs (used to build /property/{id} URLs). Call with no parameters to list all available properties.",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string", description: "Free-text keyword to match against title, location, view, or id (e.g. 'Vidin', 'sea view', 'Sunny Beach', 'Yasen')" },
        max_price: { type: "number", description: "Maximum price in EUR" },
        min_price: { type: "number", description: "Minimum price in EUR" },
        property_type: {
          type: "string",
          enum: ["house", "apartment", "villa", "land", "commercial", "farm", "block", "garage", "industrial", "office", "studio"],
          description: "Type of property",
        },
        transaction_type: { type: "string", enum: ["sale", "rent"], description: "Buy or rent" },
        bedrooms_min: { type: "integer", description: "Minimum number of bedrooms" },
        location: { type: "string", description: "City, region, or area name" },
        min_area: { type: "integer", description: "Minimum area in m²" },
        limit: { type: "integer", description: "Max results to return (default 10, max 50)" },
      },
      required: [],
      additionalProperties: false,
    },
  },
};

function searchCatalog(params: Record<string, any>): CatalogItem[] {
  const limit = Math.min(Math.max(Number(params.limit) || 10, 1), 50);
  const q = (params.query ? String(params.query) : "").toLowerCase().trim();
  const loc = (params.location ? String(params.location) : "").toLowerCase().trim();

  const matchesText = (p: CatalogItem, needle: string) => {
    if (!needle) return true;
    const haystack = [
      p.id, p.title, p.titleBg, p.titleRu, p.titleDe, p.titleIt,
      p.location, p.locationBg, p.locationRu, p.locationDe, p.locationIt,
      p.view, p.type,
    ].filter(Boolean).join(" ").toLowerCase();
    return haystack.includes(needle);
  };

  const filtered = CATALOG.filter((p) => {
    if (params.max_price && p.price > Number(params.max_price)) return false;
    if (params.min_price && p.price < Number(params.min_price)) return false;
    if (params.property_type && p.type !== params.property_type) return false;
    if (params.transaction_type && p.transactionType !== params.transaction_type) return false;
    if (params.bedrooms_min && (p.bedrooms ?? 0) < Number(params.bedrooms_min)) return false;
    if (params.min_area && (p.area ?? 0) < Number(params.min_area)) return false;
    if (loc && !matchesText(p, loc)) return false;
    if (q && !matchesText(p, q)) return false;
    return true;
  });

  return filtered.slice(0, limit);
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

    // Step 1: tool-aware non-streaming call
    const toolCheckResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: aiHeaders,
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        tools: [SEARCH_TOOL],
        stream: false,
      }),
    });

    if (!toolCheckResponse.ok) {
      const status = toolCheckResponse.status;
      if (status === 429) return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (status === 402) return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const t = await toolCheckResponse.text();
      console.error("AI gateway error:", status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const toolCheckData = await toolCheckResponse.json();
    const choice = toolCheckData.choices?.[0];
    const toolCalls = choice?.message?.tool_calls;

    if (!toolCalls || toolCalls.length === 0) {
      const streamResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: aiHeaders,
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: true,
        }),
      });
      if (!streamResponse.ok) {
        const t = await streamResponse.text();
        console.error("Stream error:", streamResponse.status, t);
        return new Response(JSON.stringify({ error: "AI service error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      return new Response(streamResponse.body, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
    }

    // Step 2: execute tool calls against the in-memory catalog
    let propertiesForFrontend: any[] = [];
    const toolResults: { role: string; tool_call_id: string; content: string }[] = [];

    for (const tc of toolCalls) {
      if (tc.function.name === "search_properties") {
        let params: Record<string, any> = {};
        try { params = JSON.parse(tc.function.arguments || "{}"); } catch { /* empty */ }

        const results = searchCatalog(params);

        // Frontend cards (mapped to PropertyResult shape)
        propertiesForFrontend = results.map((p) => ({
          id: p.id,
          title: p.title,
          location: p.location,
          price: p.price,
          property_type: p.type,
          transaction_type: p.transactionType,
          bedrooms: p.bedrooms ?? undefined,
          size_sqm: p.area ?? undefined,
          images: p.image ? [p.image] : [],
        }));

        const summary = results.length > 0
          ? results.map((p) =>
              `- "${p.title}" — ${p.location} — €${p.price?.toLocaleString()} — ${p.type}, ${p.bedrooms ?? "?"} bed, ${p.area ?? "?"}m². URL: ${SITE_URL}/property/${p.id}`,
            ).join("\n")
          : "No properties found matching the criteria.";

        toolResults.push({
          role: "tool",
          tool_call_id: tc.id,
          content: `Found ${results.length} of ${CATALOG.length} properties:\n${summary}\n\nWhen replying, ALWAYS render each property as a markdown link [Title](URL).`,
        });
      }
    }

    const finalMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
      choice.message,
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
      return new Response(JSON.stringify({ error: "AI service error" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const encoder = new TextEncoder();
    const propertyEvent = propertiesForFrontend.length > 0
      ? `data: ${JSON.stringify({ properties: propertiesForFrontend })}\n\n`
      : "";

    const originalBody = finalResponse.body!;
    const readable = new ReadableStream({
      async start(controller) {
        if (propertyEvent) controller.enqueue(encoder.encode(propertyEvent));
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

    return new Response(readable, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
