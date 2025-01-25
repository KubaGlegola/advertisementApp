import { JwtPayload } from "jsonwebtoken";

export type TokenPayload = JwtPayload & {
  userId: string;
  email: string;
  role: string;
  validUntil: number;
};
