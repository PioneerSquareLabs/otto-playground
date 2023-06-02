import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  github_id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  image_url: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  language: z.string().default("TypeScript"),
  framework: z.string().default("Next.js"),
  library: z.string().default("React"),
  database: z.string().default("Supabase"),
  hosting: z.string().default("Vercel"),
  auth_framework: z.string().default("NextAuth"),
  css_framework: z.string().default("Tailwind CSS"),
  user_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const SitemapSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  file_name: z.string(),
  file_description: z.string().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  table_name: z.string(),
  approved: z.boolean().default(false),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const ColumnSchema = z.object({
  id: z.number().int(),
  data_schema_id: z.number().int(),
  column_name: z.string(),
  column_type: z.string(),
  column_description: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Column = z.infer<typeof ColumnSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  task_name: z.string(),
  task_description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;