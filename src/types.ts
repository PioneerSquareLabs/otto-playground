import { z } from "zod";

export const userSchema = z.object({
  id: z.string().default("cuid()"),
  githubId: z.number(),
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
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof projectSchema>;

export const projectSitemapSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  fileName: z.string(),
  fileDescription: z.string().nullable(),
  figmaLink: z.string().nullable(),
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
  columnDescription: z.string().nullable(),
  dataType: z.string(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectDataColumn = z.infer<typeof projectDataColumnSchema>;

export const projectTaskSchema = z.object({
  id: z.string().default("cuid()"),
  projectId: z.string(),
  taskName: z.string(),
  taskDescription: z.string().nullable(),
  githubIssueId: z.number().nullable(),
  approved: z.boolean().default(false),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ProjectTask = z.infer<typeof projectTaskSchema>;