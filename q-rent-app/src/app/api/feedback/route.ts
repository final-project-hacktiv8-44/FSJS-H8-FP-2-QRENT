import FeedbackModel from "@/db/models/feedback";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const UserId = request.headers.get("x-UserId") as string;
    const userRole = request.headers.get("x-role") as string;

    if (userRole === "admin") {
      return NextResponse.json(
        {
          message: "You do not have permission",
        },
        {
          status: 403,
        }
      );
    } else {
      const feedback = await FeedbackModel.allFeedback(UserId);

      return NextResponse.json(
        {
          feedback,
        },
        {
          status: 201,
        }
      );
    }
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
