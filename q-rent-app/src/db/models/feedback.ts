import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { BookingType, FeedbackType, InputFormType } from "@/types/type";

class FeedbackModel{
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

      static async newFeedback(body: FeedbackType) {
        const result = FeedbackModel.dbFeedback();
        const newFeedback = await result.insertOne({
          UserId: new ObjectId(body.UserId),
          UserName: body.Username,
          BookingId: new ObjectId(body.BookingId),
          review: body.review,
        });

        return "Success giving feedback";
    }

    
    
}