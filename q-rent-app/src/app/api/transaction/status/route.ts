import BookingModel from "@/db/models/booking";
import TransactionModel from "@/db/models/transaction";
import { NextResponse } from "next/server";
import { sha512 } from "js-sha512";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const verifyMidtrans = sha512(
      `${body.order_id}${body.status_code}${body.gross_amount}SB-Mid-server-3JXHxuI9_6OZJ2qyGrWsmUiL`
    );

    if (verifyMidtrans !== body.signature_key) {
      return NextResponse.json(
        {
          message: "Your signature key is not valid",
        },
        {
          status: 403,
        }
      );
    }

    const transaction = await TransactionModel.transactionById(body.order_id);

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
