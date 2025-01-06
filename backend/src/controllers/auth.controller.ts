import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import authService from "../services/auth.service";

async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await authService.authenticateUser(email, password);

    res.cookie("session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(Date.now() + 1000 * 60 * 15),
    });

    res.status(200).json({ message: "Logged in" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

async function register(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body;
    const role = "user";

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuid();

    const token = await authService.createAccount(userId, email, hashedPassword, role, name);

    res.cookie("session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(Date.now() + 1000 * 60 * 15),
    });
    res.status(201).send("User created");
  } catch (err) {
    res.status(500).send("Error creating user");
  }
}

export default {
  login,
  register,
};
