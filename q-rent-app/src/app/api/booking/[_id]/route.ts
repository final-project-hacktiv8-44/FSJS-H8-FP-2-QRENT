import BookingModel from "@/db/models/booking";
import CarModel from "@/db/models/cars";
import { CarType } from "@/types/type";
import { NextResponse } from "next/server";
import { z } from "zod";

const BookingZod = z.object({
  bookingStart: z.string(),
  bookingEnd: z.string(),
  ktp: z.boolean(),
  sim: z.boolean(),
  age: z.string(),
});

type Body = z.infer<typeof BookingZod>;

export async function POST(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const body: Body = await request.json();

    const validate = BookingZod.safeParse(body);

    if (!validate.success) {
      throw validate.error;
    }

    const dateStart = Number(body.bookingStart.split("-")[2]);
    const dateEnd = Number(body.bookingEnd.split("-")[2]);

    const car = (await CarModel.detailCarById(params._id)) as CarType;

    const carRent = car.pricePerDay as number;

    const UserId = request.headers.get("x-UserId") as string;

    const booking = await BookingModel.newBooking({
      bookingStart: body.bookingStart,
      bookingEnd: body.bookingEnd,
      totalPrice: (dateEnd - dateStart) * carRent,
      CarId: car._id,
      UserId: UserId,
      ktp: body.ktp,
      sim: body.sim,
      age: body.age,
    });

    return NextResponse.json(
      {
        booking,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const pathError = error.issues[0].path[0];
      const messageError = error.issues[0].message;

      return NextResponse.json(
        {
          message: `${pathError} ${messageError.toLocaleLowerCase()}`,
        },
        {
          status: 400,
        }
      );
    }

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
