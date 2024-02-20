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

export type UserProfileType = Omit<UserType, "password">;

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
  user: UserProfileType;
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
  brand: string;
  merk: string;
  pricePerDay: number;
  year: string;
  BbmType: string;
  transmission: string;
  modelType: string;
  thumbnail: string;
  carImage: ImageCar;
  kilometer: string;
  review: FeedbackType | undefined;
  user: UserType | undefined;
  feedback: FeedbackType[];
};

export type ImageCar = [string, string, string];

export type BookingType = {
  _id: ObjectId;
  bookingStart: Date;
  bookingEnd: Date;
  status: string;
  totalPrice: number;
  UserId: ObjectId;
  CarId: ObjectId;
  car: CarType;
  user: UserProfileType;
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

export type InputFormNew = Omit<
  InputFormType,
  "totalPrice" | "CarId" | "UserId" | "totalPrice"
>;

export type SectionType = {
  _id: ObjectId;
  image: string;
  excerpt: string;
};

export type MyResponse = {
  section: SectionType[];
};

export type FeedbackType = {
  _id: ObjectId;
  UserId: ObjectId;
  BookingId: ObjectId;
  CarId: ObjectId;
  review: string;
  CarId: ObjectId;
};

export type NewFeedbackType = {
  UserId: string;
  BookingId: ObjectId;
  CarId: ObjectId;
  review: string;
  CarId: ObjectId;
};

export type TravelType = {
  _id: ObjectId;
  name: string;
  image: string;
  location: string;
  description: string;
};

export type TransactionType = {
  _id: ObjectId;
  UserId: ObjectId;
  access_token: string;
  BookingId: ObjectId;
};
