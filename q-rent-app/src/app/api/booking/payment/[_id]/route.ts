import BookingModel from "@/db/models/booking";
import TransactionModel from "@/db/models/transaction";
const midtransClient = require("midtrans-client");
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const UserId = request.headers.get("x-UserId") as string;
    const book = await BookingModel.bookingById(params._id);

    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-3JXHxuI9_6OZJ2qyGrWsmUiL" as string,
    });

    let parameter = {
      transaction_details: {
        order_id: book._id,
        gross_amount: book.totalPrice,
      },
      item_details: [
        {
          name: book.car.name,
          type: book.car.type,
          color: book.car.color,
          price: book.totalPrice,
          seat: book.car.seat,
          region: book.car.region,
          plat: book.car.plat,
          merk: book.car.merk,
          year: book.car.year,
          transmission: book.car.transmission,
          bbmType: book.car.BbmType,
          modelType: book.car.modelType,
          quantity: 1,
        },
      ],
      credit_card: {
        secure: true,
      },
      customer_details: {
        username: book.user.username,
        email: book.user.email,
        gender: book.user.image,
      },
    };

    const transaction = await snap.createTransaction(parameter);
    console.log(transaction, "??><><??");

    let transactionToken = transaction.token;
    console.log("transactionToken:", transactionToken);

    await TransactionModel.createTransaction({
      UserId: UserId,
      access_token: transactionToken,
      BookingId: book._id,
    });

    return NextResponse.json(
      {
        message: "Success Payment",
        transactionToken: transactionToken,
        BookingId: book._id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error, "?????");

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
