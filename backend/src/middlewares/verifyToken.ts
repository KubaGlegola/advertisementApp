import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.session;
  if (!token) {
    res.status(401).send("Unauthorized");
    return;
  }
  try {
    jwt.verify(token, process.env.AUTH_SECRET as string);
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
}
