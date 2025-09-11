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

// Booking email templates
export function createBookingEmailHTML(booking: {
  name: string;
  email: string;
  company: string;
  role: string;
  businessType: string;
  consultationType: string;
  duration: string;
  selectedDate: string;
  selectedTimeSlot: string;
  challenges: string[];
  priority: string;
  timeline: string;
}): string {
  const dateFormatted = new Date(booking.selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Consultation Booking - CAPLEO Sage Solutions</h2>
      
      <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1e40af; margin-top: 0;">📅 Consultation Details:</h3>
        <p><strong>Type:</strong> ${booking.consultationType}</p>
        <p><strong>Duration:</strong> ${booking.duration}</p>
        <p><strong>Date:</strong> ${dateFormatted}</p>
        <p><strong>Time:</strong> ${booking.selectedTimeSlot}</p>
      </div>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Client Information:</h3>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Company:</strong> ${booking.company}</p>
        <p><strong>Role:</strong> ${booking.role}</p>
        <p><strong>Industry:</strong> ${booking.businessType}</p>
      </div>
      
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Business Context:</h3>
        <p><strong>Priority:</strong> ${booking.priority}</p>
        <p><strong>Timeline:</strong> ${booking.timeline}</p>
        <p><strong>Key Challenges:</strong></p>
        <ul>
          ${booking.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This consultation was booked through the CAPLEO Sage Solutions smart booking system.<br>
          Please prepare for the session and send calendar invite to: ${booking.email}
        </p>
      </div>
    </div>
  `;
}

export function createBookingEmailText(booking: {
  name: string;
  email: string;
  company: string;
  role: string;
  businessType: string;
  consultationType: string;
  duration: string;
  selectedDate: string;
  selectedTimeSlot: string;
  challenges: string[];
  priority: string;
  timeline: string;
}): string {
  const dateFormatted = new Date(booking.selectedDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
New Consultation Booking - CAPLEO Sage Solutions

CONSULTATION DETAILS:
Type: ${booking.consultationType}
Duration: ${booking.duration}
Date: ${dateFormatted}
Time: ${booking.selectedTimeSlot}

CLIENT INFORMATION:
Name: ${booking.name}
Email: ${booking.email}
Company: ${booking.company}
Role: ${booking.role}
Industry: ${booking.businessType}

BUSINESS CONTEXT:
Priority: ${booking.priority}
Timeline: ${booking.timeline}
Key Challenges:
${booking.challenges.map(challenge => `- ${challenge}`).join('\n')}

---
This consultation was booked through the CAPLEO Sage Solutions smart booking system.
Please prepare for the session and send calendar invite to: ${booking.email}
  `;
}

// Assessment email templates
export function createAssessmentEmailHTML(assessment: {
  name: string;
  email: string;
  company: string;
  score: number;
  level: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">New Digital Readiness Assessment - CAPLEO Sage Solutions</h2>
      
      <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #059669; margin-top: 0;">📊 Assessment Results:</h3>
        <p><strong>Score:</strong> ${assessment.score}% Digital Readiness</p>
        <p><strong>Level:</strong> ${assessment.level}</p>
      </div>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
        <p><strong>Name:</strong> ${assessment.name}</p>
        <p><strong>Email:</strong> ${assessment.email}</p>
        <p><strong>Company:</strong> ${assessment.company}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px;">
          This assessment was completed through the CAPLEO Sage Solutions website.<br>
          Consider following up with personalized recommendations.
        </p>
      </div>
    </div>
  `;
}

export function createAssessmentEmailText(assessment: {
  name: string;
  email: string;
  company: string;
  score: number;
  level: string;
}): string {
  return `
New Digital Readiness Assessment - CAPLEO Sage Solutions

ASSESSMENT RESULTS:
Score: ${assessment.score}% Digital Readiness
Level: ${assessment.level}

CONTACT INFORMATION:
Name: ${assessment.name}
Email: ${assessment.email}
Company: ${assessment.company}

---
This assessment was completed through the CAPLEO Sage Solutions website.
Consider following up with personalized recommendations.
  `;
}