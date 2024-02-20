import CarModel from "@/db/models/cars";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1", 20);
    const pageSize = parseInt(searchParams.get("pageSize") || "20", 20);
    const region = searchParams.get("region");

    let products;
    if (search) {
      products = await CarModel.carSearch(search);
    } else if (region) {
      products = await CarModel.paginateCars(page, pageSize, region);
    } else {
      products = await CarModel.paginateCars(page, pageSize, "");
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
