import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendEmail, createContactEmailHTML, createContactEmailText } from "./email";
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
        const emailSent = await sendEmail({
          to: "capleosage@outlook.com",
          from: "noreply@capleosage.com", // This will need to be verified with SendGrid
          subject: `New Contact Form Submission from ${contact.name}`,
          text: createContactEmailText(contact),
          html: createContactEmailHTML(contact)
        });
        
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
