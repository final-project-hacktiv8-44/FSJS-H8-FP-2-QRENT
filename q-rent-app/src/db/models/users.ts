import { RegisterType, UserType } from "@/types/type";
import { database } from "../config/mongodb";
import SignPassword from "../helpers/bcrypt";
import { ObjectId } from "mongodb";

class UserModel {
  static dbUser() {
    const result = database.collection("users");
    return result;
  }

  static async userByEmail(email: string) {
    const result = UserModel.dbUser();
    const login = await result.findOne({ email: email });

    return login as UserType;
  }

  static async userByUsername(username: string) {
    const result = UserModel.dbUser();
    const login = await result.findOne({ username: username });

    return login as UserType;
  }

  static async userById(UserId: string) {
    const result = UserModel.dbUser();
    const user = await result.findOne({
      _id: UserId,
    });
    return user as UserType;
  }

  static async register(newUser: RegisterType) {
    const result = UserModel.dbUser();
    const user = await result.insertOne({
      ...newUser,
      image:
        "https://res.cloudinary.com/daz8ay876/image/upload/v1707735219/final-project/profile.jpg",
      role: "customer",
      password: SignPassword(newUser.password),
    });
    return {
      _id: user.insertedId,
      ...newUser,
    } as UserType;
  }

  static async updateProfileImage(UserId: string, imageUrl: string) {
    const result = UserModel.dbUser();
    const profile = await result.updateOne(
      { _id: new ObjectId(UserId) },
      { $set: { image: imageUrl } }
    );

    return profile;
  }
}

export default UserModel;
