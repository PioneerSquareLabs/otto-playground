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
  github_repo: z.string().nullable(),
  slack_channel: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const SitemapSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  file_name: z.string(),
  file_description: z.string().nullable(),
  figma_link: z.string().nullable(),
  status: z.string().default("pending"),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  table_name: z.string(),
  column_name: z.string(),
  column_type: z.string(),
  column_description: z.string().nullable(),
  status: z.string().default("pending"),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const TaskSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.string().default("pending"),
  github_issue_id: z.number().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Task = z.infer<typeof TaskSchema>;