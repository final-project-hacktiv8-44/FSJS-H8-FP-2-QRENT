"use client";
import { motion } from "framer-motion";
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
import Swal from "sweetalert2";
import ReviewCard from "./ReviewCard";

import * as React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

type MyResponse = {
  car: CarType;
  feedback: FeedbackType[];
};

export default function DetailCar({ data }: { data: MyResponse }) {
  const prices = formatToRupiah(data.car.pricePerDay);

  const [imageSlide, setImageSlide] = useState<string>(data.car.carImage[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSlideImage = (carImage: string) => {
    setImageSlide(carImage);
  };

  const handleBooking = () => {
    // Tampilkan SweetAlert
    Swal.fire({
      title: "Booking Confirmation",
      text: "Are you sure you want to book this car?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, book it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      // Jika pengguna menekan tombol "Yes"
      if (result.isConfirmed) {
        // Redirect ke halaman booking
        window.location.href = `/booking/${data.car._id}`;
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mt-[5rem]">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-row mx-[5rem] mt-[3rem] mb-[5rem]">
            <div className="flex flex-col gap-4 mr-[1rem]">
              {data.car.carImage.map((el, i) => (
                <div key={i} onClick={() => handleSlideImage(el)}>
                  <img
                    className="w-[14.9rem] h-[10rem] border-2 border-gray-100 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-110"
                    src={el}
                    alt={data.car.name}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col mr-[3rem]">
              <div className="border border-gray-100 rounded-lg shadow-md p-4">
                <img
                  className="w-[47rem] h-[30rem] rounded-lg shadow-md transition duration-300 transform"
                  src={imageSlide}
                  alt={data.car.name}
                />
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-md text-center">
              <h1 className="text-3xl mb-10 font-bold text-black">
                Detail Car
              </h1>
              <div className="flex flex-col text-black">
                <div className="flex flex-col">
                  <h3 className="font-secondary text-[2rem]">
                    {data.car.brand}
                  </h3>
                  <h3 className="font-secondary text-[2rem] mb-10">
                    {data.car.name}
                  </h3>
                  <h4 className="text-3xl font-bold flex flex-col mb-10">
                    {prices}
                  </h4>
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
                  <div className="flex flex-row gap-2 items-center mt-16">
                    <button
                      onClick={handleBooking}
                      className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded w-full flex justify-center ">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row gap-5 bg-white rounded-lg p-8 text-black shadow-lg">
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
            </div>
          </div>
          <div className="pt-10 flex flex-col mb-12">
            <h4 className="text-black font-bold text-center mb-6 text-[2rem]">
              Testimoni
            </h4>
            <div className="w-[100rem]">
              <Swiper
                modules={[EffectCoverflow, Pagination]}
                effect={"coverflow"}
                loop={true}
                spaceBetween={1}
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                  // rotate: 0,
                  slideShadows: true,
                }}
                className="coverflow">
                <div className="flex flex-row flex-wrap justify-center gap-3">
                  {data.car.review?.map((feed, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <ReviewCard review={feed} users={data.car.user} />
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
