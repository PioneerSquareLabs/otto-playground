import { z } from "zod";

export const userSchema = z.object({
  id: z.string().default("cuid()"),
  githubId: z.number(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type User = z.infer<typeof userSchema>;

export const projectSchema = z.object({
  id: z.string().default("cuid()"),
  name: z.string(),
  description: z.string().nullable(),
  userId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof projectSchema>;

export const projectSettingsSchema = z.object({
  id: z.string().default("cuid()"),
  language: z.string(),
  framework: z.string(),
  cssStyling: z.string(),
  database: z.string(),
  hosting: z.string(),
  authentication: z.string(),
  projectId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectSettings = z.infer<typeof projectSettingsSchema>;

export const sitemapItemSchema = z.object({
  id: z.string().default("cuid()"),
  fileName: z.string(),
  fileDescription: z.string().nullable(),
  figmaLink: z.string().nullable(),
  approved: z.boolean().default(false),
  projectId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type SitemapItem = z.infer<typeof sitemapItemSchema>;

export const dataSchemaItemSchema = z.object({
  id: z.string().default("cuid()"),
  tableName: z.string(),
  columnName: z.string(),
  columnDescription: z.string().nullable(),
  approved: z.boolean().default(false),
  projectId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type DataSchemaItem = z.infer<typeof dataSchemaItemSchema>;

export const taskSchema = z.object({
  id: z.string().default("cuid()"),
  title: z.string(),
  description: z.string().nullable(),
  githubIssueId: z.number().nullable(),
  approved: z.boolean().default(false),
  projectId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Task = z.infer<typeof taskSchema>;

export const slackAuthSchema = z.object({
  id: z.string().default("cuid()"),
  accessToken: z.string(),
  userId: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type SlackAuth = z.infer<typeof slackAuthSchema>;