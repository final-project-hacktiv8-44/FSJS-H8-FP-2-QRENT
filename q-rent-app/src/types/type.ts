import { ObjectId } from "mongodb";

export type UserType = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
};

export type RegisterType = Omit<UserType, "_id" | "role" | "image">;

export type ProfileType = {
  _id: ObjectId;
  name: string;
  address: string;
  bio: string;
  birth: string;
};

// services
// booking
// car
// profile
// users
// pengembalian
