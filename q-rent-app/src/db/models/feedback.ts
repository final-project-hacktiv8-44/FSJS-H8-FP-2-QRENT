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
    return feedback as FeedbackType;
  }

  static async newFeedback(body: NewFeedbackType) {
    const result = FeedbackModel.dbFeedback();
    await result.insertOne({
      UserId: new ObjectId(body.UserId),
      BookingId: new ObjectId(body.BookingId),
      review: body.review,
    });
    return "Success giving feedback";
  }
}

export default FeedbackModel;
