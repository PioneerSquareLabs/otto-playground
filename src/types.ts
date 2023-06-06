import { z } from "zod";

export const userSchema = z.object({
  id: z.string().default("cuid()"),
  githubId: z.number(),
  githubUsername: z.string(),
  email: z.string(),
  avatarUrl: z.string().nullable(),
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

export const sitemapSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  fileName: z.string(),
  fileDescription: z.string().nullable(),
  figmaLink: z.string().nullable(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Sitemap = z.infer<typeof sitemapSchema>;

export const dataSchemaSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  tableName: z.string(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type DataSchema = z.infer<typeof dataSchemaSchema>;

export const columnSchema = z.object({
  id: z.string().default("cuid()"),
  dataSchemaId: z.string(),
  columnName: z.string(),
  columnDescription: z.string().nullable(),
  dataType: z.string(),
  isNullable: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Column = z.infer<typeof columnSchema>;

export const taskSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  githubIssueId: z.number().nullable(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Task = z.infer<typeof taskSchema>;