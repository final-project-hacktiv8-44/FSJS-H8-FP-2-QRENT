import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { NewProfile, ProfileType } from "@/types/type";

class ProfileModel {
  static dbProfile() {
    const result = database.collection("profile");
    return result;
  }

  static async userProfile(UserId: string) {
    const result = ProfileModel.dbProfile();
    const user = await result
      .find({
        UserId: new ObjectId(UserId),
      })
      .toArray();

    return user as ProfileType;
  }

  // static async userProfileById() {
  //   const result = ProfileModel.dbProfile();
  //   const user = await result.findOne({});
  // }

  static async updateProfile(body: NewProfile) {
    const result = ProfileModel.dbProfile();
    await result.insertOne({
      name: body.name,
      address: body.address,
      bio: body.bio,
      birth: body.birth,
      UserId: new ObjectId(body.UserId),
    });

    return "Success update your profile";
  }
}

export default ProfileModel;
