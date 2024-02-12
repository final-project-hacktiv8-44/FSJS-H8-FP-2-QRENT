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
  slug: string;
  type: string;
  name: string;
  color: string;
  plat: string;
  merk: string;
  pricePerDay: number;
  year: string;
  BbmType: string;
  modelType: string;
  carImage: string;
  description: string;
};

export type BookingType = {
  _id: ObjectId;
  bookingStart: Date;
  bookingEnd: Date;
  totalPrice: number;
  UserId: ObjectId;
  CarId: ObjectId;
  location: string;
};

export type ServiceType = {
  _id: ObjectId;
  ktp: boolean;
  sim: boolean;
  UserId: ObjectId;
  BookingId: ObjectId;
  ProductId: ObjectId;
};

// services
// booking
// car
// profile
// users
// pengembalian
