"use client";
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

export default function Detail({ data }: { data: MyResponse }) {
  const prices = formatToRupiah(data.car.pricePerDay);
  const id = data.car._id.toString();

  const [imageSlide, setImageSlide] = useState<string>(data.car.carImage[0]);

  const handleSlideImage = (carImage: string) => {
    setImageSlide(carImage);
  };

  return (
    <div className="flex flex-col mt-[5rem]">
    <div className="flex flex-row mx-[5rem] mt-[3rem] mb-[5rem]">
      {/* Tampilan gambar mobil */}
      <div className="flex flex-col gap-4 mr-[1rem]">
        {data.car.carImage.map((el, i) => (
          <div key={i} onClick={() => handleSlideImage(el)}>
            <img
              className="w-[14.9rem] h-[10rem] border-2 border-blue-400 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-110"
              src={el}
              alt=""
            />
          </div>
        ))}
      </div>
  
      {/* Tampilan gambar besar mobil */}
      <div className="flex flex-col gap-4 mr-[3rem]">
        <div className="border border-blue-400 rounded-lg shadow-md p-4">
          <img
            className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
            src={imageSlide}
            alt=""
          />
        </div>
      </div>
  
      {/* Penjelasan dan tombol booking */}
      <div className="border border-blue-400 rounded-lg p-8">
        <div className="flex flex-col gap-5 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="font-secondary text-[2rem]">{data.car.brand}</h3>
            <h3 className="font-secondary text-[2rem]">{data.car.name}</h3>
            <h4 className="text-[1rem]">{prices}</h4>
            <div className="flex flex-row gap-2 items-center">
              <h4 className="font-semibold">
                <span className="mr-2">
                  <IoMdColorPalette className="text-gray-600 inline" />
                </span>
                Warna: {data.car.color}
              </h4>
            </div>
            <h4 className="font-semibold">
              <span className="mr-2">
                <MdPlace className="text-gray-600 inline" />
              </span>
              Region: {data.car.region}
            </h4>
          </div>
        </div>
  
        {/* Informasi detail mobil */}
        <div className="flex flex-col gap-2 border border-blue-400 rounded-lg p-8 text-black">
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCar className="text-gray-600 inline" />
            </span>
            Tipe: {data.car.type}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <FaAddressCard className="text-gray-600 inline" />
            </span>
            Plat: {data.car.plat}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCalendar className="text-gray-600 inline" />
            </span>
            Year: {data.car.year}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <GiKeyCard className="text-gray-600 inline" />
            </span>
            Transmission: {data.car.transmission}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <BsFillFuelPumpFill className="text-gray-600 inline" />
            </span>
            Fuel: {data.car.BbmType}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <MdAirlineSeatReclineNormal className="text-gray-600 inline" />
            </span>
            Seat: {data.car.seat} Seats
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdSpeedometer className="text-gray-600 inline" />
            </span>
            Km: {data.car.kilometer}
          </p>
  
          {/* Tombol Booking */}
          <Link href={`/booking/${data.car._id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>  
  );
}
