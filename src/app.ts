import express from "express";
import taskRoutes from "./routes/task.routes.js"
import { getTaskById, updateTask } from "./controllers/task.controller.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Task Manager API is running"
  });
});
app.use("/api/tasks",taskRoutes)
app.use("/api/tasks/:id",getTaskById)
// app.use("/api/tasks/:id",updateTask)
export default app;