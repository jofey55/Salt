import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const raidReports = pgTable("raid_reports", {
  id: serial("id").primaryKey(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  verified: boolean("verified").notNull().default(false),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertRaidReportSchema = createInsertSchema(raidReports).omit({
  id: true,
  verified: true,
  createdAt: true,
});

export type InsertRaidReport = z.infer<typeof insertRaidReportSchema>;
export type RaidReport = typeof raidReports.$inferSelect;

export const volunteerSubmissions = pgTable("volunteer_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  role: text("role").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertVolunteerSubmissionSchema = createInsertSchema(volunteerSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertVolunteerSubmission = z.infer<typeof insertVolunteerSubmissionSchema>;
export type VolunteerSubmission = typeof volunteerSubmissions.$inferSelect;
