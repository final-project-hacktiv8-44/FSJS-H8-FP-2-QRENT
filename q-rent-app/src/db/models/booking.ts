import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { BookingType, InputFormType, StatusType } from "@/types/type";

class BookingModel {
  static dbBooking() {
    const result = database.collection("booking");
    return result;
  }

  static dbService() {
    const result = database.collection("services");
    return result;
  }

  static async allBooking(UserId?: string) {
    const result = BookingModel.dbBooking();

    const agg = [
      {
        $match: {
          UserId: new ObjectId(UserId),
        },
      },
      {
        $lookup: {
          from: "cars",
          localField: "CarId",
          foreignField: "_id",
          as: "car",
        },
      },
      {
        $unwind: {
          path: "$car",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "UserId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          user: {
            password: 0,
          },
        },
      },
    ];

    const agg2 = [
      {
        $lookup: {
          from: "cars",
          localField: "CarId",
          foreignField: "_id",
          as: "car",
        },
      },
      {
        $unwind: {
          path: "$car",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "UserId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          user: {
            password: 0,
          },
        },
      },
    ];

    if (UserId) {
      const book = await result.aggregate(agg).toArray();
      return book as BookingType;
    } else {
      const book = await result.aggregate(agg2).toArray();
      return book as BookingType;
    }
  }

  static async bookingById(_id: string) {
    const result = BookingModel.dbBooking();
    const agg = [
      {
        $match: {
          _id: new ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "cars",
          localField: "CarId",
          foreignField: "_id",
          as: "car",
        },
      },
      {
        $unwind: {
          path: "$car",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "UserId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          user: {
            password: 0,
          },
        },
      },
    ];

    const book = await result.aggregate(agg).toArray();
    return book[0] as BookingType;
  }

  static async newBooking(body: InputFormType) {
    const result = BookingModel.dbBooking();
    await result.insertOne({
      bookingStart: body.bookingStart,
      bookingEnd: body.bookingEnd,
      status: body.status,
      totalPrice: body.totalPrice,
      CarId: new ObjectId(body.CarId),
      UserId: new ObjectId(body.UserId),
    });

    const serviceResult = BookingModel.dbService();
    await serviceResult.insertOne({
      ktp: body.ktp,
      sim: body.sim,
      age: body.age,
    });
    return "Success Booking";
  }

  static async updateStatus(_id: string, body: StatusType) {
    const result = BookingModel.dbBooking();
    await result.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { status: body.status } }
    );
    return "Next to payment method";
  }
}
export default BookingModel;
