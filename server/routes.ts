import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Create email transporter
const createEmailTransporter = () => {
  // Use environment variables for email configuration
  const emailConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || process.env.EMAIL_USER,
      pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
    },
  };

  return nodemailer.createTransport(emailConfig);
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        const transporter = createEmailTransporter();
        
        const mailOptions = {
          from: process.env.SMTP_USER || process.env.EMAIL_USER,
          to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER || process.env.EMAIL_USER,
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        
        // Send confirmation email to the user
        const confirmationOptions = {
          from: process.env.SMTP_USER || process.env.EMAIL_USER,
          to: validatedData.email,
          subject: "Thank you for contacting Los Angeles AI Consulting",
          html: `
            <h2>Thank you for your message, ${validatedData.name}!</h2>
            <p>We have received your inquiry and will get back to you within 24 hours.</p>
            <p>Best regards,<br>Los Angeles AI Consulting Team</p>
          `,
        };

        await transporter.sendMail(confirmationOptions);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        id: contactSubmission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
