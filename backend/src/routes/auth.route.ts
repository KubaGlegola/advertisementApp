import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import userSchema from "../models/userSchema";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { email, password, role, name } = req.body;

  if (!email || !password || !name) {
    res.status(400).send("Invalid request");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = uuidv4();

  const user = new userSchema({ userId, email, password: hashedPassword, role, name });

  try {
    await user.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(400).send(err);
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Invalid request");
    return;
  }

  const user = await userSchema.findOne({ email });

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401).send("Invalid password");
    return;
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.AUTH_SECRET as string,
    {
      algorithm: "HS256",
    }
  );

  res.cookie("session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(Date.now() + 1000 * 60 * 1),
  });

  res.status(200).json({ message: "Logged in", status: "success" });
});

authRouter.post("/logout", (req, res) => {
  res.clearCookie("session");
  res.status(200).send("Logged out");
});

export default authRouter;
