import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export function getUserFromCookie() {
  const token = cookies().get("token")?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
