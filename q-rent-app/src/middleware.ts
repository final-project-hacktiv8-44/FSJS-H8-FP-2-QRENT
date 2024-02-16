import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJose } from "../src/db/helpers/jwt";

export async function middleware(request: NextRequest) {
  const access_token = cookies().get("Authorization")?.value.split(" ")[1];

  if (!access_token) {
    return NextResponse.json(
      {
        message: "You do not have permission. please login by your account.",
      },
      {
        status: 401,
      }
    );
  }

  const decoded = await verifyJose<{
    _id: string;
    email: string;
    role: string;
  }>(access_token);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-UserId", decoded._id);
  requestHeaders.set("x-email", decoded.email);
  requestHeaders.set("x-role", decoded.role);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: ["/api/booking/:path*", "/api/users/profile/:path*"],
};
