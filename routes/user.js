import { Router } from "express";

const router = Router()
// sign up: post request
router.post('/sign-up');
// sign in: post request
router.post('/sign-in');
// verify: get request
router.get('/verify');
// change password: post request
router.post("/change-password");

export default router;