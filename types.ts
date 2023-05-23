import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  password: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  user_id: z.number().int(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const TeamMemberSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  created_at: z.date(),
  updated_at: z.date(),
  project_id: z.number().int(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

export const DocumentSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  status: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  project_id: z.number().int(),
});

export type Document = z.infer<typeof DocumentSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  story_points: z.number().int(),
  parent_task_id: z.number().int().optional(),
  created_at: z.date(),
  updated_at: z.date(),
  project_id: z.number().int(),
});

export type Task = z.infer<typeof TaskSchema>;