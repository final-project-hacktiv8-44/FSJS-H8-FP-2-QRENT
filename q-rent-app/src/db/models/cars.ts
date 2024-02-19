import { CarType } from "@/types/type";
import { database } from "../config/mongodb";
import { ObjectId } from "mongodb";

class CarModel {
  static dbCar() {
    const result = database.collection("cars");
    return result;
  }

  static async allCar() {
    const result = CarModel.dbCar();
    const cars = await result.find();
    return cars as CarType[];
  }

  static async detailCar(slug: string) {
    const result = CarModel.dbCar();

    const agg = [
      {
        $match: {
          slug: slug,
        },
      },
      {
        $lookup: {
          from: "feedback",
          localField: "_id",
          foreignField: "CarId",
          as: "review",
        },
      },
    ];

    const car = await result.aggregate(agg).toArray();
    return car[0] as CarType | null;
  }

  static async detailCarById(_id: string) {
    const result = CarModel.dbCar();
    const car = await result.findOne({
      _id: new ObjectId(_id),
    });

    return car as CarType;
  }

  static async carSearch(search: string): Promise<CarType> {
    const result = CarModel.dbCar();
    const car = await result
      .find({
        name: { $regex: new RegExp(search, "i") },
      })
      .toArray();
    return car as CarType;
  }

  static async paginateCars(
    page: number,
    pageSize: number,
    region: string
  ): Promise<CarType[]> {
    const result = CarModel.dbCar();
    let query = result.find();

    if (region) {
      query = query.filter({ region: region });
    }

    const cars = await query
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    return cars as CarType[];
  }
}

export default CarModel;
