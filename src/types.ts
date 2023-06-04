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
  figma_link: z.string().nullable(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  table_name: z.string(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const ColumnSchema = z.object({
  id: z.number().int(),
  data_schema_id: z.number().int(),
  column_name: z.string(),
  column_description: z.string().nullable(),
  data_type: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Column = z.infer<typeof ColumnSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  project_id: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;