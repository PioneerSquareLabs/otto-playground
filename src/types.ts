import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().default('cuid()'),
  github_id: z.number().nonnegative().int().nullable(),
  name: z.string(),
  email: z.string().email(),
  image: z.string().nullable(),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type User = z.infer<typeof UserSchema>;

export const ProjectSchema = z.object({
  id: z.string().default('cuid()'),
  user_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  language: z.string().default('TypeScript'),
  framework: z.string().default('Next.js'),
  database: z.string().default('Supabase'),
  hosting: z.string().default('Vercel'),
  authentication: z.string().default('NextAuth'),
  css_styling: z.string().default('Tailwind CSS'),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectFileSchema = z.object({
  id: z.string().default('cuid()'),
  project_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  figma_link: z.string().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectFile = z.infer<typeof ProjectFileSchema>;

export const ProjectTableSchema = z.object({
  id: z.string().default('cuid()'),
  project_id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectTable = z.infer<typeof ProjectTableSchema>;

export const ProjectColumnSchema = z.object({
  id: z.string().default('cuid()'),
  project_table_id: z.string(),
  name: z.string(),
  data_type: z.string(),
  description: z.string().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectColumn = z.infer<typeof ProjectColumnSchema>;

export const ProjectTaskSchema = z.object({
  id: z.string().default('cuid()'),
  project_id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  github_issue_id: z.number().nonnegative().int().nullable(),
  approved: z.boolean().default(false),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date()),
});

export type ProjectTask = z.infer<typeof ProjectTaskSchema>;