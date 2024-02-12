import { RegisterType, UserType } from "@/types/type";
import { database } from "../config/mongodb";
import SignPassword from "../helpers/bcrypt";

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

  static async register(newUser: RegisterType) {
    const result = UserModel.dbUser();
    const user = await result.insertOne({
      ...newUser,
      image:
        "https://res.cloudinary.com/daz8ay876/image/upload/v1707735219/final-project/profile.jpg",
      role: "member",
      password: SignPassword(newUser.password),
    });
    return {
      _id: user.insertedId,
      ...newUser,
    } as UserType;
  }
}

export default UserModel;
