import SectionModel from "@/db/models/section";
import {NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const section = await SectionModel.getAllSection();
    return NextResponse.json(
      {
        section
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