"use client";
import { useState } from "react";
import { formatToRupiah } from "@/db/helpers/formatter";
import { CarType, FeedbackType } from "@/types/type";
import {
  IoMdCar,
  IoMdColorPalette,
  IoMdCalendar,
  IoMdSpeedometer,
} from "react-icons/io";
import { MdAirlineSeatReclineNormal, MdPlace } from "react-icons/md";
import { GiKeyCard } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import Link from "next/link";
type MyResponse = {
  car: CarType;
  feedback: FeedbackType[];
};

export default function DetailCar({ data }: { data: MyResponse }) {
  const prices = formatToRupiah(data.car.pricePerDay);
  console.log(data)

  const [imageSlide, setImageSlide] = useState<string>(data.car.carImage[0]);

  const handleSlideImage = (carImage: string) => {
    setImageSlide(carImage);
  };

  return (
    <div className="flex flex-col mt-[5rem]">
      <div className="flex flex-col">
        <div className="flex flex-row mx-[5rem] mt-[3rem] mb-[5rem]">
          <div className="flex flex-col gap-4 mr-[1rem]">
            {data.car.carImage.map((el, i) => (
              <div key={i} onClick={() => handleSlideImage(el)}>
                <img
                  className="w-[14.9rem] h-[10rem] border-2 border-gray-100 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-110"
                  src={el}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col mr-[3rem]">
            <div className="border border-gray-100 rounded-lg shadow-md p-4">
              <img
                className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
                src={imageSlide}
                alt=""
              />
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-md">
            <h1 className="text-3xl font-bold mb-4 font-bold text-black">Detail Car</h1>
            <div className="flex flex-col gap-5 text-black">
              <div className="flex flex-col gap-2">
                <h3 className="font-secondary text-[2rem]">{data.car.brand}</h3>
                <h3 className="font-secondary text-[2rem]">{data.car.name}</h3>
                <h4 className="text-[1rem]">{prices}</h4>
                <div className="flex flex-row gap-2 items-center">
                  <h4 className="font-semibold">
                    <span className="mr-2">
                      <IoMdColorPalette className="tex-blue-400 inline" />
                    </span>
                    Warna: {data.car.color}
                  </h4>
                </div>
                <h4 className="font-semibold">
                  <span className="mr-2">
                    <MdPlace className="tex-blue-400 inline" />
                  </span>
                  Region: {data.car.region}
                </h4>
                <Link href={`/booking/${data.car._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex justify-center mt-16">
                    Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-5 bg-white rounded-lg p-8 text-black shadow-md">
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdCar className="tex-blue-400 inline" />
              </span>
              Tipe: {data.car.type}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <FaAddressCard className="tex-blue-400 inline" />
              </span>
              Plat: {data.car.plat}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdCalendar className="tex-blue-400 inline" />
              </span>
              Year: {data.car.year}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <GiKeyCard className="tex-blue-400 inline" />
              </span>
              Transmission: {data.car.transmission}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <BsFillFuelPumpFill className="tex-blue-400 inline" />
              </span>
              Fuel: {data.car.BbmType}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <MdAirlineSeatReclineNormal className="tex-blue-400 inline" />
              </span>
              Seat: {data.car.seat} Seats
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdSpeedometer className="tex-blue-400 inline" />
              </span>
              Km: {data.car.kilometer}
            </p>
          </div>
        </div>
        <div className="m-8">
          <h4 className="text-black font-bold">Feedback</h4>
          {data.feedback.map((el, index) => {
            return <p key={String(el._id)} className="text-black">{index+1}. {el.review}</p>
          })}
        </div>
      </div>
    </div>
  );
}
