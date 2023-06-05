import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().int(),
  github_id: z.number().int(),
  name: z.string(),
  email: z.string(),
  avatar_url: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable(),
  user_id: z.number().int(),
  github_repo_url: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectArchitectureOptionSchema = z.object({
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

export type ProjectArchitectureOption = z.infer<typeof ProjectArchitectureOptionSchema>;

export const SlackConnectionSchema = z.object({
  id: z.number().int(),
  slack_user_id: z.string(),
  slack_team_id: z.string(),
  user_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type SlackConnection = z.infer<typeof SlackConnectionSchema>;

export const SitemapNodeSchema = z.object({
  id: z.number().int(),
  file_name: z.string(),
  description: z.string().nullable(),
  figma_link: z.string().nullable(),
  project_id: z.number().int(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type SitemapNode = z.infer<typeof SitemapNodeSchema>;

export const DataTableSchema = z.object({
  id: z.number().int(),
  table_name: z.string(),
  project_id: z.number().int(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataTable = z.infer<typeof DataTableSchema>;

export const DataColumnSchema = z.object({
  id: z.number().int(),
  column_name: z.string(),
  description: z.string().nullable(),
  data_type: z.string(),
  data_table_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type DataColumn = z.infer<typeof DataColumnSchema>;

export const TaskSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  project_id: z.number().int(),
  approved: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;