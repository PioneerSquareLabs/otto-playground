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

export const ProjectSettingSchema = z.object({
  id: z.number().int(),
  language: z.string(),
  framework: z.string(),
  database_system: z.string(),
  hosting: z.string(),
  authentication_framework: z.string(),
  css_styling: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectSetting = z.infer<typeof ProjectSettingSchema>;

export const ProjectSitemapSchema = z.object({
  id: z.number().int(),
  file_name: z.string(),
  description: z.string().nullable(),
  figma_url: z.string().nullable(),
  approved: z.boolean(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectSitemap = z.infer<typeof ProjectSitemapSchema>;

export const ProjectDataSchemaSchema = z.object({
  id: z.number().int(),
  table_name: z.string(),
  description: z.string().nullable(),
  approved: z.boolean(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectDataSchema = z.infer<typeof ProjectDataSchemaSchema>;

export const ProjectDataColumnSchema = z.object({
  id: z.number().int(),
  column_name: z.string(),
  data_type: z.string(),
  description: z.string().nullable(),
  data_schema_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectDataColumn = z.infer<typeof ProjectDataColumnSchema>;

export const ProjectTaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  approved: z.boolean(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectTask = z.infer<typeof ProjectTaskSchema>;