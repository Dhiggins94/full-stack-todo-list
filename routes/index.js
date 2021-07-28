import { Router } from "express"
import usersRoutes from "./user.js"

const router = Router();

router.get("/", (req, res) => res.send("this is api root"));

router.use("/", usersRoutes)
// router.use("/", todoRoutes)

export default router;
