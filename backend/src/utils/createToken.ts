import jwt from "jsonwebtoken";

export const createToken = (userId: string, email: string, role: string) => {
  const token = jwt.sign(
    {
      userId,
      email,
      role,
      validUntil: Date.now() + 1000 * 60 * 15,
    },
    process.env.AUTH_SECRET as string,
    {
      algorithm: "HS256",
    }
  );

  return token;
};
