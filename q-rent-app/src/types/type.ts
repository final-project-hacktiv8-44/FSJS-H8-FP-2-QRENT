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

export type CarType = {
  _id: ObjectId;
  type: string;
  name: string;
  color: string;
  plat: string;
  merk: string;
  pricePerDay: string;
  year: string;
  BbmType: string;
  modelType: string;
  carImage: string;
  description: string;
};

export type SectionType = {
  _id: ObjectId;
  image: string;
  excerpt: string;
}

export type MyResponse = {
  section: SectionType[]
}