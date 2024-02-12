import { CarType } from "@/types/type";
import { database } from "../config/mongodb";

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
    const product = await result.findOne({
      slug: slug,
    });
    return product as CarType | null;
  }

  static async carSearch(search: string): Promise<CarType> {
    const result = CarModel.dbCar();
    const product = await result
      .find({
        name: { $regex: new RegExp(search, "i") },
      })
      .toArray();
    return product as CarType;
  }

  static async paginateCars(
    page: number,
    pageSize: number
  ): Promise<CarType[]> {
    const result = CarModel.dbCar();
    const products = await result
      .find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();
    return products as CarType[];
  }
}

export default CarModel;
