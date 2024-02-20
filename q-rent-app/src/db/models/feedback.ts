import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import {
  BookingType,
  FeedbackType,
  InputFormType,
  NewFeedbackType,
} from "@/types/type";

class FeedbackModel {
  static dbFeedback() {
    const result = database.collection("feedback");
    return result;
  }

  static async allFeedback(UserId: string) {
    const result = FeedbackModel.dbFeedback();
    const feedback = await result
      .find({
        UserId: new ObjectId(UserId),
      })
      .toArray();

    return feedback as FeedbackType[];
  }

  static async newFeedback(body: NewFeedbackType) {
    const result = FeedbackModel.dbFeedback();
    await result.insertOne({
      UserId: new ObjectId(body.UserId),
      BookingId: new ObjectId(body.BookingId),
      review: body.review,
      CarId: new ObjectId(body.CarId)
    });
    return "Success giving feedback";
  }

  static async getFeedbackByCar(slug: string) {
    const dbcars = database.collection("cars");
    const car = await dbcars.findOne({
      slug
    })
    
    const result = FeedbackModel.dbFeedback();
    const feedback = await result.find({
      CarId: new ObjectId(car._id)
    }).toArray()

    return feedback as FeedbackType[]
  }
}

export default FeedbackModel;
