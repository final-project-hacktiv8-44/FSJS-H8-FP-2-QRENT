import CarModel from "@/db/models/cars";
import FeedbackModel from "@/db/models/feedback";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const car = await CarModel.detailCar(params.slug);

    const feedback = await FeedbackModel.getFeedbackByCar(params.slug);

    if (!car) {
      return NextResponse.json(
        {
          message: "Product Not Found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        car,
        feedback,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Internal server error`,
      },
      {
        status: 500,
      }
    );
  }
}
