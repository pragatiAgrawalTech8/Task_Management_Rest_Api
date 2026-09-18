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

export const getTaskById = (req:Request,res:Response)=>{
    const id = Number(req.params.id)
    const task = tasks.find(task => task.id ===id)
    if(!task){
        res.status(404).json({
            message:"Task not found"
        })
    }
    res.json(task)
}

export const updateTask =(req:Request, res:Response)=>{
  const id = Number(req.params.id)
  const task = tasks.find(task => task.id ===id)
  if(!task){
    return res.status(404).json({
      message:"Task not fouund"
    })
  }
  const {title,description,completed} = req.body;
  task.title = title;
  task.description = description;
  task.completed = completed;

  res.json(task)
}

export const deleteTask = (req:Request,res:Response)=>{
  const id = Number(req.params.id)

  const taskIndex = tasks.findIndex(task => task.id === id)

  if(taskIndex === -1){
    return res.status(404).json({
      message:"Task not found"
    })
  }
  tasks.splice(taskIndex,1)
  res.json({
    message:"task delete Successfully"
  })
}