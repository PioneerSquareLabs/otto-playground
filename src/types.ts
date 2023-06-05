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
  name: z.string(),
  description: z.string().nullable(),
  user_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectArchitectureOptionSchema = z.object({
  id: z.string().default("cuid()"),
  language: z.string(),
  framework: z.string(),
  database: z.string(),
  hosting: z.string(),
  authentication: z.string(),
  css_styling: z.string(),
  project_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectArchitectureOption = z.infer<typeof ProjectArchitectureOptionSchema>;

export const SlackConnectionSchema = z.object({
  id: z.string().default("cuid()"),
  slack_user_id: z.string(),
  slack_team_id: z.string(),
  access_token: z.string(),
  user_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type SlackConnection = z.infer<typeof SlackConnectionSchema>;

export const SitemapNodeSchema = z.object({
  id: z.string().default("cuid()"),
  file_name: z.string(),
  description: z.string().nullable(),
  figma_link: z.string().nullable(),
  approved: z.boolean().default(false),
  project_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type SitemapNode = z.infer<typeof SitemapNodeSchema>;

export const DataTableSchema = z.object({
  id: z.string().default("cuid()"),
  table_name: z.string(),
  approved: z.boolean().default(false),
  project_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type DataTable = z.infer<typeof DataTableSchema>;

export const DataColumnSchema = z.object({
  id: z.string().default("cuid()"),
  column_name: z.string(),
  data_type: z.string(),
  description: z.string().nullable(),
  data_table_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type DataColumn = z.infer<typeof DataColumnSchema>;

export const TaskSchema = z.object({
  id: z.string().default("cuid()"),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_number: z.number().nullable(),
  approved: z.boolean().default(false),
  project_id: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Task = z.infer<typeof TaskSchema>;