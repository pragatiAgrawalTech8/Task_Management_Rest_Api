import { Request, Response } from "express";
import { Task } from "../types/task.types.js";

let tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newTask: Task = {
    id: Date.now(),
    title,
    description,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};