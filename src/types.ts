import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().default("cuid()"),
  github_id: z.number(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.string().default("cuid()"),
  user_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  language: z.string(),
  framework: z.string(),
  database: z.string(),
  hosting: z.string(),
  auth_framework: z.string(),
  css_styling: z.string(),
  slack_auth_token: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectFileSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  file_name: z.string(),
  file_description: z.string().nullable(),
  figma_link: z.string().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectFile = z.infer<typeof ProjectFileSchema>;

export const ProjectTableSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  table_name: z.string(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectTable = z.infer<typeof ProjectTableSchema>;

export const ProjectColumnSchema = z.object({
  id: z.string().default("cuid()"),
  project_table_id: z.string(),
  column_name: z.string(),
  column_description: z.string().nullable(),
  data_type: z.string(),
  is_nullable: z.boolean().default(true),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectColumn = z.infer<typeof ProjectColumnSchema>;

export const ProjectTaskSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  task_description: z.string(),
  github_issue_id: z.number().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectTask = z.infer<typeof ProjectTaskSchema>;