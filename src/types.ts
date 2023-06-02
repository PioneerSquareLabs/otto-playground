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

export const ProjectConfigurationSchema = z.object({
  id: z.number().int(),
  language: z.string(),
  framework: z.string(),
  database: z.string(),
  hosting: z.string(),
  authentication: z.string(),
  css_styling: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectConfiguration = z.infer<typeof ProjectConfigurationSchema>;

export const SitemapSchema = z.object({
  id: z.number().int(),
  file_name: z.string(),
  description: z.string().nullable(),
  figma_link: z.string().nullable(),
  status: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.number().int(),
  table_name: z.string(),
  status: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const ColumnSchema = z.object({
  id: z.number().int(),
  column_name: z.string(),
  data_type: z.string(),
  description: z.string().nullable(),
  data_schema_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Column = z.infer<typeof ColumnSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.string(),
  github_issue_id: z.number().int().nullable(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;