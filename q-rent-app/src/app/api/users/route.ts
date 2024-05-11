import ProfileModel from "@/db/models/profile";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const UserId = request.headers.get("x-UserId") as string;

    const user = await ProfileModel.userProfile(UserId);

    return NextResponse.json(
      {
        user,
      },
      {
        status: 201,
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const UserId = request.headers.get("x-UserId") as string;

    const user = await ProfileModel.updateProfile({
      name: body.name,
      address: body.address,
      bio: body.bio,
      birth: body.birth,
      UserId: UserId,
    });

    return NextResponse.json(
      {
        user,
      },
      {
        status: 201,
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
