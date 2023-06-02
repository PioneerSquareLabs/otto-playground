export type User = {
  id: number;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
};

export type Project = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  owner_id: number;
};

export type TeamMember = {
  id: number;
  email: string;
  created_at: Date;
  updated_at: Date;
  name: string;
  project_id: number;
};

export type Document = {
  id: number;
  created_at: Date;
  updated_at: Date;
  status: string;
  project_id: number;
  title: string;
  content: string;
};

export type DocumentSection = {
  id: number;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
  document_id: number;
};

export type Task = {
  id: number;
  created_at: Date;
  updated_at: Date;
  status: string;
  description: string;
  project_id: number;
  title: string;
  parent_task_id?: number | undefined;
};