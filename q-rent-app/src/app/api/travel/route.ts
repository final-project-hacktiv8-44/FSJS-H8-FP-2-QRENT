import TravelModel from "@/db/models/travel";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const travel = await TravelModel.allTravel();

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
