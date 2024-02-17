import BookingModel from "@/db/models/booking";
const midtransClient = require("midtrans-client");
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const book = await BookingModel.bookingById(params._id);

    console.log(book, "???????");

    // let snap = new midtransClient.Snap({
    //   isProduction: false,
    //   serverKey: "SB-Mid-server-3JXHxuI9_6OZJ2qyGrWsmUiL" as string,
    // });

    // let parameter = {
    //   transaction_details: {
    //     order_id: `Q-rent-${book._id}-payment`,
    //     gross_amount: book.totalPrice,
    //   },
    //   item_details: {
    //     name: book.car.name,
    //     type: book.car.type,
    //     color: book.car.color,
    //     pricePerDay: book.car.pricePerDay,
    //     seat: book.car.seat,
    //     region: book.car.region,
    //     plat: book.car.plat,
    //     merk: book.car.merk,
    //     year: book.car.year,
    //     transmission: book.car.transmission,
    //     bbmType: book.car.BbmType,
    //     modelType: book.car.modelType,
    //   },
    //   credit_card: {
    //     secure: true,
    //   },
    //   customer_details: {
    //     username: book.user.username,
    //     email: book.user.email,
    //     gender: book.user.image,
    //   },
    // };

    // const transaction = await snap.createTransaction(parameter);

    // let transactionToken = transaction.token;
    // console.log("transactionToken:", transactionToken);

    return NextResponse.json(
      {
        message: "Success Payment",
        // transactionToken: transactionToken,
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
