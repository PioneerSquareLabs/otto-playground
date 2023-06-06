import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  githubId: z.number(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

export const projectSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  language: z.string(),
  framework: z.string(),
  database: z.string(),
  hosting: z.string(),
  authentication: z.string(),
  cssStyling: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Project = z.infer<typeof projectSchema>;

export const sitemapSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  fileName: z.string(),
  description: z.string().nullable(),
  figmaLink: z.string().nullable(),
  approved: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Sitemap = z.infer<typeof sitemapSchema>;

export const dataSchemaSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  tableName: z.string(),
  approved: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DataSchema = z.infer<typeof dataSchemaSchema>;

export const columnSchema = z.object({
  id: z.string(),
  dataSchemaId: z.string(),
  columnName: z.string(),
  dataType: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Column = z.infer<typeof columnSchema>;

export const taskSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  githubIssueId: z.number().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  approved: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Task = z.infer<typeof taskSchema>;