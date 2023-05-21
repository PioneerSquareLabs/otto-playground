_
import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { Task, TaskSchema } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { id } = req.query;

  const { data, error } = await supabase
    .from<Task>("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (!data) {
    res.status(404).json({ error: "Task not found" });
    return;
  }

  const validationResult = TaskSchema.safeParse(data);

  if (!validationResult.success) {
    res.status(500).json({ error: "Invalid task data" });
    return;
  }

  const validatedTask: Task = validationResult.data;
  res.status(200).json(validatedTask);
}