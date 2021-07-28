import { Router } from "express";
import { signUp, signIn, verify } from "../controllers/users.js";

const router = Router();

// Sign Up : POST
router.post("/sign-up", signUp);
// Sign In : POST
router.post("/sign-in", signIn);
// Verify : GET
router.get("/verify", verify);
// Change Password : POST
router.post("/change-password");

export default router;
