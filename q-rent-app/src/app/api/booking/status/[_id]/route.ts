import BookingModel from "@/db/models/booking";
import { NextResponse } from "next/server";
import { z } from "zod";

const BookingZod = z.object({
  status: z.string(),
});

type Body = z.infer<typeof BookingZod>;

export async function PATCH(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const body: Body = await request.json();
    const validationResult = BookingZod.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Invalid request body",
          errors: validationResult.error.errors,
        },
        {
          status: 400,
        }
      );
    }

    const book = await BookingModel.bookingById(params._id);

    if (!book) {
      return NextResponse.json(
        {
          message: "Booking not found",
        },
        {
          status: 404,
        }
      );
    }

    await BookingModel.updateStatus(params._id, body);

    return NextResponse.json(
      {
        message: "Status updated successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
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
