import userSchema from "../models/userSchema";
import bcrypt from "bcrypt";
import { createToken } from "../utils/createToken";

async function authenticateUser(email: string, password: string) {
  const user = await userSchema.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = createToken(user.userId, user.email, user.role);

  return token;
}

async function createAccount(
  userId: string,
  email: string,
  password: string,
  role: string = "user",
  name: string
) {
  const user = new userSchema({ userId, email, password, role, name });
  await user.save();

  const token = createToken(userId, email, role);
  return token;
}

export default {
  createAccount,
  authenticateUser,
};
