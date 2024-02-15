import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { NewProfile, ProfileType } from "@/types/type";
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest } from "next";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

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

  // static async updateProfileImage(
  //   UserId: string,
  //   file: NextApiRequest["file"]
  // ) {
  //   try {
  //     // Unggah gambar ke Cloudinary
  //     const cloudinaryResponse = await cloudinary.uploader.upload(file.path);

  //     // Dapatkan URL gambar yang diunggah
  //     const imageUrl = cloudinaryResponse.secure_url;

  //     // Perbarui dokumen profil pengguna di MongoDB dengan URL gambar baru
  //     const result = ProfileModel.dbProfile();
  //     await result.updateOne(
  //       { UserId: new ObjectId(UserId) },
  //       { $set: { imageUrl } }
  //     );

  //     return "Success update your profile image";
  //   } catch (error) {
  //     console.error("Error updating profile image:", error);
  //     throw new Error("Failed to update profile image");
  //   }
  // }
}

export default ProfileModel;
