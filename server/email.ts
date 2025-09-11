// SendGrid email service - using javascript_sendgrid integration
import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    
    if (params.text) {
      emailData.text = params.text;
    }
    
    if (params.html) {
      emailData.html = params.html;
    }
    
    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Contact form email template
export function createContactEmailHTML(contact: {
  name: string;
  email: string;
  phone?: string;
  company?: string | null;
  service: string | null;
  message: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Contact Form Submission - CAPLEO Sage Solutions</h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ''}
        ${contact.company ? `<p><strong>Company:</strong> ${contact.company}</p>` : ''}
        <p><strong>Service Interest:</strong> ${contact.service || 'Not specified'}</p>
      </div>
      
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Message:</h3>
        <p style="white-space: pre-wrap;">${contact.message}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This email was sent from the CAPLEO Sage Solutions contact form.<br>
          Please respond to the client directly at: ${contact.email}
        </p>
      </div>
    </div>
  `;
}

export function createContactEmailText(contact: {
  name: string;
  email: string;
  phone?: string;
  company?: string | null;
  service: string | null;
  message: string;
}): string {
  return `
New Contact Form Submission - CAPLEO Sage Solutions

Contact Details:
Name: ${contact.name}
Email: ${contact.email}
${contact.phone ? `Phone: ${contact.phone}` : ''}
${contact.company ? `Company: ${contact.company}` : ''}
Service Interest: ${contact.service || 'Not specified'}

Message:
${contact.message}

---
This email was sent from the CAPLEO Sage Solutions contact form.
Please respond to the client directly at: ${contact.email}
  `;
}