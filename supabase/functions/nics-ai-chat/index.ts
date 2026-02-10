import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are NICS AI, a friendly real estate assistant for AIByteconsult / BulgariaEstate. You help users find properties and services in Bulgaria.

Your conversation flow:
1. Start with a warm greeting and introduce yourself as NICS AI assistant.
2. Ask for the user's name.
3. Ask for their email address.
4. Ask for their phone number.
5. Ask what service they need:
   - Real Estate (buying, selling, renting properties)
   - Company or Trade Representative Registration
   - Insurance
   - Translation and Legalization of Documents
6. If they choose Real Estate:
   - Ask: Buy, Sell, or Rent?
   - Ask: House or Apartment?
   - Ask: How many bedrooms?
   - Ask: Preferred location/city in Bulgaria?
   - Ask: Budget range?
   - Ask any other relevant questions
7. For other services, ask relevant details about their needs.
8. After collecting all info, confirm the details and tell the user:
   "All your information has been transferred to our team. You will receive a personal offer or reply as soon as possible from our email: estate@aibyteconsult.com"

Important rules:
- Be conversational and friendly, ask ONE question at a time
- Keep responses concise (2-3 sentences max)
- If user provides info proactively, acknowledge it and move to next question
- Always respond in the same language the user writes in
- Extract structured data from the conversation when possible
- When you have collected name, email, phone, and service details, include the marker [CONVERSATION_COMPLETE] at the end of your final message (hidden from user)`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
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
