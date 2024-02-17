import { database } from "../config/mongodb";

class TransactionModel {
  static dbTransaction() {
    const result = database.collection("transaction");
    return result;
  }

  static async createTransaction() {}
}

export default TransactionModel;
