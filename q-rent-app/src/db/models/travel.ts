import { TravelType } from "@/types/type";
import { database } from "../config/mongodb";
import { ObjectId } from "mongodb";

class TravelModel {
  static dbTravel() {
    const result = database.collection("travel");
    return result;
  }

  static async allTravel() {
    const result = TravelModel.dbTravel();
    const travel = await result.find().toArray();
    return travel as TravelType[];
  }

  static async travelByLocation(location: string) {
    const result = TravelModel.dbTravel();
    const travel = await result
      .find({
        location: location,
      })
      .toArray();
    return travel as TravelType[];
  }

  static async travelById(_id: string) {
    const result = TravelModel.dbTravel();
    const travel = await result.findOne({
      _id: new ObjectId(_id),
    });
    return travel as TravelType;
  }

  static async travelByName(name: string) {
    const result = TravelModel.dbTravel();
    const travel = await result.findOne({
      name: name,
    });
    return travel as TravelType;
  }
}

export default TravelModel;
