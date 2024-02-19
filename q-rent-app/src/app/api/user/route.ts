import UserModel from "@/db/models/users";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const UserId = request.headers.get("x-UserId") as string;

    const user = await UserModel.user(UserId);

    return NextResponse.json(
      {
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
