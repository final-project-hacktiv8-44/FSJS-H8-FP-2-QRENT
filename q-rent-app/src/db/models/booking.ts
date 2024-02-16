import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { BookingType, InputFormType } from "@/types/type";

class BookingModel {
  static dbBooking() {
    const result = database.collection("booking");
    return result;
  }

  static dbService() {
    const result = database.collection("services");
    return result;
  }

  static async allBooking(UserId: string) {
    const result = BookingModel.dbBooking();
    const book = await result
      .find({
        UserId: new ObjectId(UserId),
      })
      .toArray();
    return book as BookingType;
  }

  static async newBooking(body: InputFormType) {
    const result = BookingModel.dbBooking();
    const newBook = await result.insertOne({
      bookingStart: body.bookingStart,
      bookingEnd: body.bookingEnd,
      totalPrice: body.totalPrice,
      status: body.status,
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
}

export default BookingModel;

