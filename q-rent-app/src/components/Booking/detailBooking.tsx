"use client";
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
import { formatToRupiah } from "@/db/helpers/formatter";
import useMidtrans from "@/actions/useMidtrans";

export default function DetailBooking({ data }: { data: BookingType }) {
  console.log(data, "<<<<< data");
  //   const { booking } = data;
  useMidtrans("https://app.sandbox.midtrans.com/snap/snap.js");

  const prices = formatToRupiah(data.totalPrice);
  //   const id = booking.CarId.toString();

  const handlePayment = (token: string) => {
    window?.snap.pay(token, {
      onSuccess: function (result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      },
      onPending: function (result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      },
      // Optional
      onError: function (result) {
        /* You may add your own js here, this is just example */ document.getElementById(
          "result-json"
        ).innerHTML += JSON.stringify(result, null, 2);
      },
    });
  };
  return (
    <div className="flex flex-col mt-[5rem] ml-[10rem]">
    <div className="mx-[5rem] flex flex-row gap-8">
      {/* Detail */}
      <div className="flex flex-col gap-4">
        <div className="border border-gray-100 rounded-lg shadow-md">
          <img
            className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
            src={data.car.thumbnail}
            alt=""
          />
        </div>
      </div>
  
      {/* Informasi */}
      <div className="flex flex-col gap-4">
        <div className="border border-gray-100 rounded-lg p-8 shadow-xl">
          <div className="flex flex-col gap-5 text-black">
            <div className="flex flex-col gap-2">
              <h3 className="font-secondary text-[2rem]">{data.car.brand}</h3>
              <h3 className="font-secondary text-[2rem]">{data.car.name}</h3>
              <h4 className="text-[1rem]">{prices}</h4>
              <div className="flex flex-row gap-2 items-center">
                <h4 className="font-semibold">
                  <span className="mr-2">
                    <IoMdColorPalette className="text-blue-400 inline" />
                  </span>
                  Warna: {data.car.color}
                </h4>
              </div>
              <h4 className="font-semibold">
                <span className="mr-2">
                  <MdPlace className="text-blue-400 inline" />
                </span>
                Region: {data.car.region}
              </h4>
            </div>
          </div>
        </div>
        
        {/* Informasi */}
        <div className="border border-gray-100 rounded-lg p-8 shadow-xl text-black gap-4">
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCar className="text-blue-400 inline" />
            </span>
            Tipe: {data.car.type}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <FaAddressCard className="text-blue-400 inline" />
            </span>
            Plat: {data.car.plat}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdCalendar className="text-blue-400 inline" />
            </span>
            Year: {data.car.year}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <GiKeyCard className="text-blue-400 inline" />
            </span>
            Transmission: {data.car.transmission}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <BsFillFuelPumpFill className="text-blue-400 inline" />
            </span>
            Fuel: {data.car.BbmType}
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <MdAirlineSeatReclineNormal className="text-blue-400 inline" />
            </span>
            Seat: {data.car.seat} Seats
          </p>
          <p className="font-semibold">
            <span className="mr-2">
              <IoMdSpeedometer className="text-blue-400 inline" />
            </span>
            Km: {data.car.kilometer}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5"
            onClick={() =>
              handlePayment("98cd5433-9a14-4373-a848-5efa99049b2c")
            }
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  </div>  
  );
}
