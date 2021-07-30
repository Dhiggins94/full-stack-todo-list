import { Router } from "express";
import restrict from "../helpers/restrict.js";
import { getAllTodos, createTodo, getTodo } from "../controllers/todos.js";

const router = Router();
// get all todos. we added restrict to only be able to see our todos
router.get("/todos", restrict ,getAllTodos);
// get id todo
router.get("/todos/:id", getTodo);
// // post createtodo
router.post("/todos", restrict, createTodo);
// // put updateTodo
// router.put("/todos/:id", restrict, updateTodo);
// // delete todo
// router.delete("/todos/:id", restrict, deleteTodo);

export default router;
