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
  userId: z.string(),
  githubRepo: z.string().nullable(),
  slackChannel: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const SitemapSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  fileName: z.string(),
  fileDescription: z.string().nullable(),
  figmaLink: z.string().nullable(),
  status: z.string().default("pending"),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Sitemap = z.infer<typeof SitemapSchema>;

export const DataSchemaSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  tableName: z.string(),
  columnName: z.string(),
  columnType: z.string(),
  columnDescription: z.string().nullable(),
  status: z.string().default("pending"),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type DataSchema = z.infer<typeof DataSchemaSchema>;

export const TaskSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  status: z.string().default("pending"),
  githubIssueId: z.number().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Task = z.infer<typeof TaskSchema>;
