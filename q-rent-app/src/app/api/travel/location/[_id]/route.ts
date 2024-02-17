import TravelModel from "@/db/models/travel";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const travel = await TravelModel.travelById(params._id);

    return NextResponse.json(
      {
        travel,
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
