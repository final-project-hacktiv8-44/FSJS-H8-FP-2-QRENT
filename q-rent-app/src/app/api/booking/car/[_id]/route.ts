import BookingModel from "@/db/models/booking";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const booking = await BookingModel.bookingById(params._id);

    return NextResponse.json(
      {
        booking,
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
