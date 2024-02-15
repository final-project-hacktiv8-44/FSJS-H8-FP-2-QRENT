import { ObjectId } from "mongodb";

export type UserType = {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  image: string;
  gender: string;
  role: string;
};

export type RegisterType = Omit<UserType, "_id" | "role" | "image">;

export type CloudinaryImage = {
  image: string;
};

export type ProfileType = {
  _id: ObjectId;
  name: string;
  address: string;
  bio: string;
  birth: string;
  UserId: ObjectId;
};

export type NewProfile = {
  name: string;
  address: string;
  bio: string;
  birth: string;
  UserId: string;
};

export type CarType = {
  _id: ObjectId;
  slug: string;
  type: string;
  region: string;
  seat: string;
  name: string;
  color: string;
  plat: string;
  merk: string;
  pricePerDay: number | undefined;
  year: string;
  BbmType: string;
  modelType: string;
  thumbnile: string;
  carImage: string;
  description: string;
};

export type BookingType = {
  _id: ObjectId;
  bookingStart: Date;
  bookingEnd: Date;
  status: string;
  totalPrice: number;
  UserId: ObjectId;
  CarId: ObjectId;
};

export type StatusType = {
  status: string;
};

export type ServiceType = {
  _id: ObjectId;
  ktp: boolean;
  sim: boolean;
  age: string;
};

export type InputFormType = {
  bookingStart: string;
  bookingEnd: string;
  status: string;
  totalPrice: number | undefined;
  CarId: ObjectId;
  UserId: string;
  ktp: boolean;
  sim: boolean;
  age: string;
};

// services
// booking
// car
// profile
// users
// pengembalian

export type SectionType = {
  _id: ObjectId;
  image: string;
  excerpt: string;
};

export type MyResponse = {
  section: SectionType[];
};
