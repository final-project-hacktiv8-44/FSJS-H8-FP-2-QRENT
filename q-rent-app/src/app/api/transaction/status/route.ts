import BookingModel from "@/db/models/booking";
import TransactionModel from "@/db/models/transaction";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(
  request: Request

) {
  try {
    const body = await request.json();

    const order_id = body.order_id.slice(0, body.order_id.length-5)
    
    const transaction = await TransactionModel.transactionById(order_id);

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

    await BookingModel.updateStatus(order_id, {
      status: "paid",
    });

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
