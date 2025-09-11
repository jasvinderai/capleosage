import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBookingSchema, insertAssessmentResultSchema } from "@shared/schema";
import { sendEmail, createContactEmailHTML, createContactEmailText, createBookingEmailHTML, createBookingEmailText, createAssessmentEmailHTML, createAssessmentEmailText } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Create contact using storage interface
      const contact = await storage.createContact(validatedData);
      
      // Send email notification to capleosage@outlook.com
      try {
        const emailData = {
          name: contact.name,
          email: contact.email,
          phone: undefined, // Phone field not in current schema
          company: contact.company,
          service: contact.service,
          message: contact.description || 'No message provided'
        };
        
        const emailSent = await sendEmail(
          "capleosage@outlook.com",
          `New Contact Form Submission from ${contact.name}`,
          createContactEmailText(emailData),
          createContactEmailHTML(emailData)
        );
        
        if (!emailSent) {
          console.warn("Failed to send email notification, but contact was saved");
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue with success response even if email fails
      }
      
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contacts (for admin purposes if needed)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({
        success: true,
        data: contacts
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get featured testimonials for homepage
  app.get("/api/testimonials/featured", async (req, res) => {
    try {
      const testimonials = await storage.getFeaturedTestimonials();
      res.json({
        success: true,
        data: testimonials
      });
    } catch (error) {
      console.error("Error fetching featured testimonials:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json({
        success: true,
        data: testimonials
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get published blog posts
  app.get("/api/blog/published", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json({
        success: true,
        data: posts
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json({
        success: true,
        data: posts
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get featured case studies
  app.get("/api/case-studies/featured", async (req, res) => {
    try {
      const caseStudies = await storage.getFeaturedCaseStudies();
      res.json({
        success: true,
        data: caseStudies
      });
    } catch (error) {
      console.error("Error fetching featured case studies:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get all case studies
  app.get("/api/case-studies", async (req, res) => {
    try {
      const caseStudies = await storage.getCaseStudies();
      res.json({
        success: true,
        data: caseStudies
      });
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Booking submission endpoint
  app.post("/api/bookings", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertBookingSchema.parse(req.body);
      
      // Create booking using storage interface
      const booking = await storage.createBooking(validatedData);
      
      // Send email notification to capleosage@outlook.com
      try {
        const emailData = {
          name: booking.name,
          email: booking.email,
          company: booking.company,
          role: booking.role,
          businessType: booking.businessType,
          consultationType: booking.consultationType,
          duration: booking.duration,
          selectedDate: booking.selectedDate,
          selectedTimeSlot: booking.selectedTimeSlot,
          challenges: JSON.parse(booking.challenges),
          priority: booking.priority,
          timeline: booking.timeline
        };
        
        const emailSent = await sendEmail(
          "capleosage@outlook.com",
          `New Consultation Booking: ${booking.consultationType} - ${booking.name}`,
          createBookingEmailText(emailData),
          createBookingEmailHTML(emailData)
        );
        
        if (!emailSent) {
          console.warn("Failed to send booking email notification, but booking was saved");
        }
      } catch (emailError) {
        console.error("Booking email sending failed:", emailError);
      }
      
      res.status(201).json({
        success: true,
        message: "Consultation booked successfully",
        data: booking
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Booking submission error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Assessment submission endpoint
  app.post("/api/assessments", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertAssessmentResultSchema.parse(req.body);
      
      // Create assessment result using storage interface
      const result = await storage.createAssessmentResult(validatedData);
      
      // Optionally send email notification for high-value assessments
      if (validatedData.email) {
        try {
          const emailData = {
            name: validatedData.name || 'Anonymous',
            email: validatedData.email,
            company: validatedData.company || 'Not specified',
            score: validatedData.score,
            level: validatedData.level
          };
          
          const emailSent = await sendEmail(
            "capleosage@outlook.com",
            `New Assessment Completed: ${emailData.level} (${emailData.score}%) - ${emailData.name}`,
            createAssessmentEmailText(emailData),
            createAssessmentEmailHTML(emailData)
          );
          
          if (!emailSent) {
            console.warn("Failed to send assessment email notification, but result was saved");
          }
        } catch (emailError) {
          console.error("Assessment email sending failed:", emailError);
        }
      }
      
      res.status(201).json({
        success: true,
        message: "Assessment result saved successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Assessment submission error:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all bookings (for admin purposes)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json({
        success: true,
        data: bookings
      });
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Get all assessment results (for admin purposes)
  app.get("/api/assessments", async (req, res) => {
    try {
      const assessments = await storage.getAssessmentResults();
      res.json({
        success: true,
        data: assessments
      });
    } catch (error) {
      console.error("Error fetching assessments:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      success: true,
      message: "CAPLEO Sage Solutions API is running",
      timestamp: new Date().toISOString()
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
