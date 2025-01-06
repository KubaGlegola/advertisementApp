import jwt from "jsonwebtoken";

export const decodeToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.AUTH_SECRET as string);
    return decoded;
  } catch (err) {
    return null;
  }
};
