import { z } from "zod";

export const userSchema = z.object({
  id: z.string().default("cuid()"),
  githubId: z.number().optional(),
  name: z.string(),
  email: z.string(),
  imageUrl: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type User = z.infer<typeof userSchema>;

export const projectSchema = z.object({
  id: z.string().default("cuid()"),
  name: z.string(),
  description: z.string(),
  userId: z.string(),
  githubRepoUrl: z.string().nullable(),
  slackChannelId: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof projectSchema>;

export const projectSitemapSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  fileName: z.string(),
  fileDescription: z.string().nullable().optional(),
  figmaUrl: z.string().nullable().optional(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectSitemap = z.infer<typeof projectSitemapSchema>;

export const projectDataSchemaSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  tableName: z.string(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectDataSchema = z.infer<typeof projectDataSchemaSchema>;

export const projectDataColumnSchema = z.object({
  id: z.string().default("cuid()"),
  dataSchemaId: z.string(),
  columnName: z.string(),
  columnType: z.string(),
  columnDescription: z.string().nullable(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectDataColumn = z.infer<typeof projectDataColumnSchema>;

export const projectTaskSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  taskName: z.string(),
  taskDescription: z.string(),
  githubIssueId: z.number().nullable(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectTask = z.infer<typeof projectTaskSchema>;