import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRaidReportSchema, insertVolunteerSubmissionSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Raid Reports API
  app.get("/api/raid-reports", async (req, res) => {
    try {
      const reports = await storage.getRaidReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching raid reports:", error);
      res.status(500).json({ error: "Failed to fetch raid reports" });
    }
  });

  app.post("/api/raid-reports", async (req, res) => {
    try {
      const validatedData = insertRaidReportSchema.parse(req.body);
      const newReport = await storage.createRaidReport(validatedData);
      res.status(201).json(newReport);
    } catch (error) {
      console.error("Error creating raid report:", error);
      res.status(400).json({ error: "Invalid raid report data" });
    }
  });

  // Volunteer Submissions API
  app.post("/api/volunteer-submissions", async (req, res) => {
    try {
      const validatedData = insertVolunteerSubmissionSchema.parse(req.body);
      const newSubmission = await storage.createVolunteerSubmission(validatedData);
      
      console.log(`New volunteer submission: ${validatedData.name} (${validatedData.role})`);
      console.log(`Email: ${validatedData.email}, Phone: ${validatedData.phone}`);
      if (validatedData.message) {
        console.log(`Message: ${validatedData.message}`);
      }
      
      res.status(201).json(newSubmission);
    } catch (error) {
      console.error("Error creating volunteer submission:", error);
      res.status(400).json({ error: "Invalid volunteer submission data" });
    }
  });

  return httpServer;
}
