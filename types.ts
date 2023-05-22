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
  user_id: z.number().int(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

export const DocumentSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  title: z.string(),
  content: z.string(),
  status: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Document = z.infer<typeof DocumentSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  assignee_id: z.number().int().nullable(),
  parent_task_id: z.number().int().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;

export const CommentSchema = z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  task_id: z.number().int(),
  content: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Comment = z.infer<typeof CommentSchema>;