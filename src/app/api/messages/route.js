import { Resend } from 'resend';

// Initialize Resend only at runtime with the API key
let resend;

// This will be called only at request time, not during build
function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get Resend client at runtime
    const resendClient = getResendClient();

    // Send email to your Gmail using Resend's verified domain
    const emailResult = await resendClient.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Using Resend's verified domain
      to: ['kamlesh.satpute24@pccoepune.org'], // Your Gmail address
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">New Portfolio Contact Message</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Message Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #6b7280;">Name:</strong>
              <span style="color: #111827; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #6b7280;">Email:</strong>
              <span style="color: #111827; margin-left: 10px;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #6b7280;">Message:</strong>
              <div style="color: #111827; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              • Reply directly to: <a href="mailto:${email}" style="color: #1e40af;">${email}</a><br>
              • View sender's profile<br>
              • Add to contacts
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This message was sent from your portfolio contact form at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      `,
      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}
Message: ${message}

Sent on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}

Quick Actions:
• Reply directly to: ${email}
• View sender's profile
• Add to contacts
      `,
    });

    if (emailResult.error) {
      console.error('Email sending failed:', emailResult.error);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email. Please try again later.' 
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }

    // Log the successful message
    console.log('Contact message sent successfully:', { 
      name, 
      email, 
      message, 
      timestamp: new Date().toISOString(),
      emailId: emailResult.data?.id 
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error processing message:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error. Please try again later.' 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}
