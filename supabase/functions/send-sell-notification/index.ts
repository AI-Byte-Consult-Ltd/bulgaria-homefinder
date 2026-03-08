import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, location, propertyType, priceExpectation, areaSqm, bedrooms, description } = await req.json();

    if (!name || !email || !location) {
      return new Response(
        JSON.stringify({ error: "Name, email and location are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY not configured, skipping email send");
      return new Response(
        JSON.stringify({ success: true, emailSent: false }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NICS Estate <noreply@aibyteconsult.com>",
        to: ["info@aibyteconsult.com"],
        subject: `New Property Sell Submission from ${name}`,
        html: `
          <h2>New Property Sell Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <hr/>
          <h3>Property Details</h3>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Type:</strong> ${propertyType || "Not specified"}</p>
          <p><strong>Price Expectation:</strong> ${priceExpectation ? "€" + Number(priceExpectation).toLocaleString() : "Not specified"}</p>
          <p><strong>Area:</strong> ${areaSqm ? areaSqm + " m²" : "Not specified"}</p>
          <p><strong>Bedrooms:</strong> ${bedrooms || "Not specified"}</p>
          ${description ? `<hr/><p><strong>Description:</strong></p><p>${description.replace(/\n/g, "<br/>")}</p>` : ""}
          <hr/>
          <p style="color:#888;font-size:12px;">Sent from NICS Estate sell property form</p>
        `,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errBody = await emailResponse.text();
      console.error(`Resend error [${emailResponse.status}]:`, errBody);
      return new Response(
        JSON.stringify({ success: true, emailSent: false }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, emailSent: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
