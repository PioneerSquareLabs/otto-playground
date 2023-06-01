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
  owner_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const TeamMemberSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

export const DocumentSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  status: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Document = z.infer<typeof DocumentSchema>;

export const DocumentSectionSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  document_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DocumentSection = z.infer<typeof DocumentSectionSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  project_id: z.number().int(),
  parent_task_id: z.number().int().optional(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;