import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { TransactionType } from "@/types/type";

type NewTrans = {
  UserId: string;
  access_token: string;
  BookingId: ObjectId;
};

class TransactionModel {
  static dbTransaction() {
    const result = database.collection("transaction");
    return result;
  }

  static async createTransaction(body: NewTrans) {
    const result = TransactionModel.dbTransaction();
    const transaction = await result.insertOne({
      UserId: new ObjectId(body.UserId),
      access_token: body.access_token,
      BookingId: body.BookingId,
    });
    return transaction as TransactionType;
  }

  static async transactionById(order_id: string) {
    const result = TransactionModel.dbTransaction();
    const transaction = await result.findOne({
      BookingId: new ObjectId(order_id),
    });
    return transaction;
  }
}

export default TransactionModel;
