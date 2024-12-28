import { jwtVerify } from "jose";

export async function decrypt(cookie: string | undefined) {
  if (!cookie) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(
      cookie,
      new TextEncoder().encode(process.env.JWT_SECRET),
      {
        algorithms: ["HS256"],
      }
    );

    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
