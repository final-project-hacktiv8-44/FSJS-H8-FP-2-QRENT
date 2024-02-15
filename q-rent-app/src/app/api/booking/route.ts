import BookingModel from "@/db/models/booking";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const UserId = request.headers.get("x-UserId") as string;
    const userRole = request.headers.get("x-role") as string;

    if (userRole !== "admin") {
      const listBooking = await BookingModel.allBooking(UserId);

      return NextResponse.json(
        {
          listBooking,
        },
        {
          status: 201,
        }
      );
    } else {
      const listBooking = await BookingModel.allBooking();

      return NextResponse.json(
        {
          listBooking,
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
