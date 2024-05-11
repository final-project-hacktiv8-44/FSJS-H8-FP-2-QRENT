import CarModel from "@/db/models/cars";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const car = await CarModel.detailCarById(params._id);
    console.log(car)

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
        car
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
