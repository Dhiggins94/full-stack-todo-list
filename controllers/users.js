import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

import User from "../models/user.js"

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11
const TOKEN_KEY = process.env.TOKEN_KEY || "123456789";

const today = new Date()
const exp = new Date(today);
exp.setDate(today.getDate() + 14);

export const signUp = async (req, res) => {
try {
  // res.send(req.body)
  const { username, email, password } = req.body;
  const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
  console.log(await bcrypt.compare(password, password_digest));
  
  const user = new User({
    email,
    username,
    password_digest,
  });
  await user.save();

  const payload = {
    id: user._id,
    username: user.username,
    email: user.email,
    exp: parseInt(exp.getTime() / 1000)
  };
  
  const token = jwt.sign(payload, TOKEN_KEY)
  res.status(201).json({ token });
} catch (e) {
  res.status(400).json({error: e.message})
}
};
