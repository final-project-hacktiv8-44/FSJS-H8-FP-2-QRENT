import BookingModel from "@/db/models/booking";
import TransactionModel from "@/db/models/transaction";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
  // { params }: { params: { _id: string } }
) {
  try {
    const body = await request.json();

    console.log(body, ">>>>>");

    const transaction = await TransactionModel.transactionById(body.order_id);

    console.log(transaction, "????");

    if (!transaction) {
      return NextResponse.json(
        {
          message: "Transaction not found",
        },
        {
          status: 404,
        }
      );
    }

    await BookingModel.updateStatus(body.order_id, {
      status: "paid",
    });

    // const userRole = request.headers.get("x-role") as string;

    // if (userRole !== "admin") {
    //   return NextResponse.json(
    //     {
    //       message: "Only admins are allowed to update status",
    //     },
    //     {
    //       status: 403,
    //     }
    //   );
    // } else {
    // await BookingModel.updateStatus(params._id, body);

    return NextResponse.json(
      {
        message: "Status updated successfully",
      },
      {
        status: 200,
      }
    );
    // }
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
