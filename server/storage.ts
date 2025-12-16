import { 
  users, 
  raidReports, 
  volunteerSubmissions,
  type User, 
  type InsertUser,
  type RaidReport,
  type InsertRaidReport,
  type VolunteerSubmission,
  type InsertVolunteerSubmission
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getRaidReports(): Promise<RaidReport[]>;
  createRaidReport(report: InsertRaidReport): Promise<RaidReport>;
  
  getVolunteerSubmissions(): Promise<VolunteerSubmission[]>;
  createVolunteerSubmission(submission: InsertVolunteerSubmission): Promise<VolunteerSubmission>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getRaidReports(): Promise<RaidReport[]> {
    return await db
      .select()
      .from(raidReports)
      .orderBy(desc(raidReports.createdAt))
      .limit(20);
  }

  async createRaidReport(report: InsertRaidReport): Promise<RaidReport> {
    const [newReport] = await db
      .insert(raidReports)
      .values(report)
      .returning();
    return newReport;
  }

  async getVolunteerSubmissions(): Promise<VolunteerSubmission[]> {
    return await db
      .select()
      .from(volunteerSubmissions)
      .orderBy(desc(volunteerSubmissions.createdAt));
  }

  async createVolunteerSubmission(submission: InsertVolunteerSubmission): Promise<VolunteerSubmission> {
    const [newSubmission] = await db
      .insert(volunteerSubmissions)
      .values(submission)
      .returning();
    return newSubmission;
  }
}

export const storage = new DatabaseStorage();
