import { SectionType } from "@/types/type";
import { database } from "../config/mongodb";

class SectionModel {
  static dbSection() {
    const result = database.collection("section");
    return result;
  }

  static async getAllSection() {
    const result = SectionModel.dbSection();
    const section = await result.find().toArray();
    return section as SectionType[];
  }
}

export default SectionModel;
