"use client";
import { useState } from "react";
import { BookingType } from "@/types/type";
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
import { formatToRupiah } from "@/db/helpers/formatter";

export default function DetailBooking({ data }: { data: BookingType }) {
    console.log(data, "<<<<< data")
//   const { booking } = data;
    
//   const prices = formatToRupiah(.totalPrice);
//   const id = booking.CarId.toString();

//   const [imageSlide, setImageSlide] = useState<string>(booking.car.carImage[0]);

//   const handleSlideImage = (carImage: string) => {
//     setImageSlide(carImage);
//   };

  return (
    <div className="flex flex-col mt-[5rem]">
    {/* <div className="flex flex-row mx-[5rem] mt-[3rem] mb-[5rem]">
     
      <div className="flex flex-col gap-4 mr-[1rem]">
        {booking.car.carImage.map((el, i) => (
          <div key={i} onClick={() => handleSlideImage(el)}>
            <img
              className="w-[14.9rem] h-[10rem] border-2 border-blue-400 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-110"
              src={el}
              alt=""
            />
          </div>
        ))}
      </div>
  
 
      <div className="flex flex-col gap-4 mr-[3rem]">
        <div className="border border-blue-400 rounded-lg shadow-md p-4">
          <img
            className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
            src={imageSlide}
            alt=""
          />
        </div>
      </div>
  
    
      <div className="border border-blue-400 rounded-lg p-8">
        <div className="flex flex-col gap-5 text-black">
          <div className="flex flex-col gap-2">
            <h3 className="font-secondary text-[2rem]">{booking.car.brand}</h3>
            <h3 className="font-secondary text-[2rem]">{booking.car.name}</h3>
            <h4 className="text-[1rem]">{prices}</h4>
            <div className="flex flex-row gap-2 items-center">
              <h4 className="font-semibold">
                <span className="mr-2">
                  <IoMdColorPalette className="text-gray-600 inline" />
                </span>
                Warna: {booking.car.color}
              </h4>
            </div>
            <h4 className="font-semibold">
              <span className="mr-2">
                <MdPlace className="text-gray-600 inline" />
              </span>
              Region: {booking.car.region}
            </h4>
          </div>
        </div>
  
    
        <div className="flex flex-col gap-2 border border-blue-400 rounded-lg p-8 text-black">
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCar className="text-gray-600 inline" />
            </span>
            Tipe: {booking.car.type}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <FaAddressCard className="text-gray-600 inline" />
            </span>
            Plat: {booking.car.plat}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCalendar className="text-gray-600 inline" />
            </span>
            Year: {booking.car.year}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <GiKeyCard className="text-gray-600 inline" />
            </span>
            Transmission: {booking.car.transmission}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <BsFillFuelPumpFill className="text-gray-600 inline" />
            </span>
            Fuel: {booking.car.BbmType}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <MdAirlineSeatReclineNormal className="text-gray-600 inline" />
            </span>
            Seat: {booking.car.seat} Seats
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdSpeedometer className="text-gray-600 inline" />
            </span>
            Km: {booking.car.kilometer}
          </p>
          <Link href={`/booking/${booking.car._id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Payment
            </button>
          </Link>
        </div>
      </div>
    </div> */}
  </div>  
  );
}
