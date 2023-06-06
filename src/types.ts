import { z } from "zod";

export const userSchema = z.object({
  id: z.string().nonempty(),
  githubId: z.number().int().nonnegative(),
  name: z.string().nonempty(),
  email: z.string().email(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof userSchema>;

export const projectSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  description: z.string().nullable(),
  userId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Project = z.infer<typeof projectSchema>;

export const projectSettingsSchema = z.object({
  id: z.string().nonempty(),
  language: z.string().nonempty(),
  framework: z.string().nonempty(),
  cssStyling: z.string().nonempty(),
  database: z.string().nonempty(),
  hosting: z.string().nonempty(),
  authentication: z.string().nonempty(),
  projectId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ProjectSettings = z.infer<typeof projectSettingsSchema>;

export const sitemapEntrySchema = z.object({
  id: z.string().nonempty(),
  fileName: z.string().nonempty(),
  fileDescription: z.string().nullable(),
  figmaLink: z.string().nullable(),
  approved: z.boolean(),
  projectId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SitemapEntry = z.infer<typeof sitemapEntrySchema>;

export const dataTableSchema = z.object({
  id: z.string().nonempty(),
  tableName: z.string().nonempty(),
  approved: z.boolean(),
  projectId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DataTable = z.infer<typeof dataTableSchema>;

export const dataColumnSchema = z.object({
  id: z.string().nonempty(),
  columnName: z.string().nonempty(),
  dataType: z.string().nonempty(),
  description: z.string().nullable(),
  dataTableId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type DataColumn = z.infer<typeof dataColumnSchema>;

export const taskSchema = z.object({
  id: z.string().nonempty(),
  title: z.string().nonempty(),
  description: z.string().nullable(),
  githubIssueId: z.number().int().nullable(),
  approved: z.boolean(),
  projectId: z.string().nonempty(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Task = z.infer<typeof taskSchema>;