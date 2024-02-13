import CarModel from "@/db/models/cars";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    let products;
    if (search) {
      products = await CarModel.carSearch(search);
    } else {
      products = await CarModel.paginateCars(limit, skip);
    }

    return NextResponse.json(
      {
        products,
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