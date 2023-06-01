import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const TeamMemberSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  projectId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;

export const DocumentSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string(),
  status: z.string(),
  projectId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Document = z.infer<typeof DocumentSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  status: z.string(),
  projectId: z.number().int(),
  storyPoints: z.number().int(),
  parentTaskId: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;