import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const secret_key = "Jurus Ninja" as string;
// const secret_key = process.env.SECRET_KEY as string;

export function SignToken(payload: JwtPayload) {
  const token = jwt.sign(payload, secret_key);
  return token;
}

export function verifyToken(token: string) {
  const payload = jwt.verify(token, secret_key);
  return payload;
}

export async function verifyJose<T>(token: string) {
  const secret = new TextEncoder().encode(secret_key);
  const josePayload = await jose.jwtVerify<T>(token, secret);
  return josePayload.payload;
}
