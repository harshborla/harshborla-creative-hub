import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const resend = {
  emails: {
    send: async (options: any) => {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
      });
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Resend API error: ${error}`);
      }
      
      return response.json();
    }
  }
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "Name:", name);

    // Send notification email to you with contact details
    const emailToYou = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["harshborla24@navgurukul.org"],
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Note: Once you verify your domain at resend.com/domains, you can send confirmation emails to your visitors automatically.</em></p>
      `,
    });

    console.log("Email notification sent successfully:", emailToYou);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
