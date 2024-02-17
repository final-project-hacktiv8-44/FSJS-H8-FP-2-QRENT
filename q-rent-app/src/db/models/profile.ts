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

    const agg = [
      {
        $match: {
          UserId: new ObjectId(UserId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "UserId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          user: {
            password: 0,
          },
        },
      },
    ];

    const user = await result.aggregate(agg).toArray();

    return user[0] as ProfileType;
  }

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
