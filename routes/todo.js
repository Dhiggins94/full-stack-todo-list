import { Router } from "express";
import restrict from "../helpers/restrict";
import {getAllTodos,createTodo, getTodo } from "../controllers/todos.js"
const router = Router()
// get  request all todos
router.use("/todos", getAllTodos);
// get  request id todo
router.use("/todos/:id", getTodo);
// post request  createtodo
router.post("/todos/:id", restrict, createTodo);
// put request updatetodo
// router.put("/todos/:id", restrict, updateTodo);
// delete todo
// router.delete("/todos/:id", restrict, deleteTodo);
export default router;