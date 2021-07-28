import { Router } from "express";
import { signUp } from "../controllers/users.js";

const router = Router()
// sign up: post request
router.post('/sign-up', signUp);
// sign in: post request
router.post('/sign-in');
// verify: get request
router.get('/verify');
// change password: post request
router.post("/change-password");

export default router;