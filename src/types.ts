import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  github_id: z.number().int(),
  name: z.string(),
  email: z.string().email(),
  image: z.string().nullable(),
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

export const ProjectOptionSchema = z.object({
  id: z.number().int(),
  language: z.string().nullable(),
  framework: z.string().nullable(),
  database: z.string().nullable(),
  hosting: z.string().nullable(),
  authentication: z.string().nullable(),
  css_styling: z.string().nullable(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ProjectOption = z.infer<typeof ProjectOptionSchema>;

export const SlackConnectionSchema = z.object({
  id: z.number().int(),
  slack_user_id: z.string(),
  slack_team_id: z.string(),
  user_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type SlackConnection = z.infer<typeof SlackConnectionSchema>;

export const SitemapSchema = z.object({
  id: z.number().int(),
  file_name: z.string(),
  description: z.string().nullable(),
  figma_link: z.string().nullable(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.number().int(),
  table_name: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const DataColumnSchema = z.object({
  id: z.number().int(),
  column_name: z.string(),
  data_type: z.string(),
  description: z.string().nullable(),
  data_schema_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataColumn = z.infer<typeof DataColumnSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  status: z.string(),
  project_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;