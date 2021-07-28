import { Router } from "express";
import usersRoutes from "./user.js";
import todoRoutes from "./todo.js";

const router = Router();

router.get("/", (req, res) => res.send("This is api root"));

router.use("/", usersRoutes);
router.use("/", todoRoutes);

export default router;

