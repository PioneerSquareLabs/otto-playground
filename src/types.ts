import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().default("cuid()"),
  github_id: z.number().int(),
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

export const ProjectSitemapSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  file_name: z.string(),
  file_description: z.string().nullable(),
  figma_link: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectSitemap = z.infer<typeof ProjectSitemapSchema>;

export const ProjectDataSchemaSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  table_name: z.string(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectDataSchema = z.infer<typeof ProjectDataSchemaSchema>;

export const ProjectDataColumnSchema = z.object({
  id: z.string().default("cuid()"),
  data_schema_id: z.string(),
  column_name: z.string(),
  column_type: z.string(),
  column_description: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectDataColumn = z.infer<typeof ProjectDataColumnSchema>;

export const ProjectTaskSchema = z.object({
  id: z.string().default("cuid()"),
  project_id: z.string(),
  task_name: z.string(),
  task_description: z.string().nullable(),
  github_issue_id: z.number().int().nullable(),
  status: z.string().default("pending"),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectTask = z.infer<typeof ProjectTaskSchema>;