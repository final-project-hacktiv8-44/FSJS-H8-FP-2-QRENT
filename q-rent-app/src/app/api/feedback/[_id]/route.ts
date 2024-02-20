import BookingModel from "@/db/models/booking";
import FeedbackModel from "@/db/models/feedback";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const body = await request.json();
    
    const UserId = request.headers.get("x-UserId") as string;
    const userRole = request.headers.get("x-role") as string;

    const booking = await BookingModel.bookingById(params._id);

    if (userRole !== "customer") {
      return NextResponse.json(
        {
          message: "You do not have permission",
        },
        {
          status: 403,
        }
      );
    } else {
      const feedback = await FeedbackModel.newFeedback({
        UserId: UserId,
        BookingId: booking._id,
        review: body.review,
        CarId: booking.CarId
      });

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
