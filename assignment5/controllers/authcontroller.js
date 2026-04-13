import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { v4 as uuidv4 } from "uuid";

export const register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    ...req.body,
    password: hashed,
    accountNumber: uuidv4()
  });

  res.json(user);
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("Invalid credentials");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).send("Invalid credentials");

  req.session.user = user;
  res.send("Login success");
};