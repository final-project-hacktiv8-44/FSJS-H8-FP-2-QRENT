'use client'
import { useState } from "react";
import { formatToRupiah } from "@/db/helpers/formatter";
import { CarType } from "@/types/type";
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
};

export default function DetailCar({ data }: { data: MyResponse }) {
  const prices = formatToRupiah(data.car.pricePerDay);
  const id = data.car._id.toString();

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
                  className="w-[14.9rem] h-[10rem] bg-blue-400 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-110"
                  src={el}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 mr-[3rem]">
            <div className="rounded-lg shadow-md">
              <img
                className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
                src={imageSlide}
                alt=""
              />
            </div>
          </div>

          <div className="bg-blue-400 rounded-lg p-8">
            <div className="flex flex-col gap-5 text-black">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-center text-[2.5rem] ">{data.car.brand}</h3>
                <h3 className="text-white font-bold text-center text-[2.5rem]">{data.car.name}</h3>
                <h4 className="text-[1.5rem] text-white font-bold mt-6">Price: {prices}</h4>
                <div className="flex flex-row gap-2 items-center text-white mt-6 hover:scale-110 transition duration-300">
                  <h4 className="font-semibold text-lg">
                    <span className="mr-2">
                      <IoMdColorPalette className="text-white inline text-3xl" />
                    </span>
                    Warna: {data.car.color}
                  </h4>
                </div>
                <h4 className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
                  <span className="mr-2">
                    <MdPlace className="text-white inline text-3xl" />
                  </span>
                  Region: {data.car.region}
                </h4>
                <Link href={`/booking/${data.car._id}`}>
                  <button className="bg-white text-blue-400 hover:text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-full w-full text-lg mt-10 transition duration-300">
                    Booking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-blue-400 text-3xl font-bold text-center">Information Details</h1>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-5 bg-blue-400 rounded-lg p-8">
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <IoMdCar className="text-white inline text-3xl" />
              </span>
              Tipe: {data.car.type}
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <FaAddressCard className="text-white inline text-3xl" />
              </span>
              Plat: {data.car.plat}
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <IoMdCalendar className="text-white inline text-3xl" />
              </span>
              Year: {data.car.year}
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <GiKeyCard className="text-white inline text-3xl" />
              </span>
              Transmission: {data.car.transmission}
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <BsFillFuelPumpFill className="text-white inline text-3xl" />
              </span>
              Fuel: {data.car.BbmType}
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <MdAirlineSeatReclineNormal className="text-white inline text-3xl" />
              </span>
              Seat: {data.car.seat} Seats
            </p>
            <p className="font-semibold text-lg hover:scale-110 transition duration-300 text-white">
              <span className="mr-2">
                <IoMdSpeedometer className="text-white inline text-3xl" />
              </span>
              Km: {data.car.kilometer}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
