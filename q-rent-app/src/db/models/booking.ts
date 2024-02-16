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

    if (UserId) {
      const book = await result
        .find({
          UserId: new ObjectId(UserId),
        })
        .toArray();
      return book as BookingType;
    } else {
      const book = await result.find().toArray();
      return book as BookingType;
    }
  }

  static async bookingById(_id: string) {
    const result = BookingModel.dbBooking();
    const book = await result.findOne({
      _id: new ObjectId(_id),
    });
    return book as BookingType;
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

