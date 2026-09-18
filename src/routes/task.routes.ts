import { Router } from "express";

import {getTasks, createTask, getTaskById, updateTask, deleteTask} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);

router.post("/", createTask);
router.get("/", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;