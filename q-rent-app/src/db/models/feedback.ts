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

    const agg = [
      {
        $match: {
          UserId: new ObjectId(UserId),
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
      {
        $lookup: {
          from: "booking",
          localField: "BookingId",
          foreignField: "_id",
          as: "booking",
        },
      },
      {
        $unwind: {
          path: "$booking",
          preserveNullAndEmptyArrays: true,
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
    ];

    const feedback = await result.aggregate(agg).toArray();

    return feedback as FeedbackType[];
  }

  static async newFeedback(body: NewFeedbackType) {
    const result = FeedbackModel.dbFeedback();
    await result.insertOne({
      UserId: new ObjectId(body.UserId),
      BookingId: new ObjectId(body.BookingId),
      CarId: new ObjectId(body.CarId),
      review: body.review,
    });
    return "Success giving feedback";
  }

  static async getFeedbackByCar(slug: string) {
    const dbcars = database.collection("cars");
    const car = await dbcars.findOne({
      slug,
    });

    const result = FeedbackModel.dbFeedback();
    const feedback = await result
      .find({
        CarId: new ObjectId(car._id),
      })
      .toArray();

    return feedback as FeedbackType[];
  }
}

export default FeedbackModel;
