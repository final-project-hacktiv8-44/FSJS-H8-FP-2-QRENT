"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { useEffect, useState } from "react";
import { TravelType } from "@/types/type";
import axios from "axios";
import Link from "next/link";

export default function ActiveSlider() {
  const [travel, setTravel] = useState<TravelType[]>([]);
  const fetchTravel = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/travel`);

      setTravel(data.travel);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTravel();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-white">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-16">
        Travel Destination
      </h1>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]">
        {travel.map((item) => (
          <SwiperSlide key={item.location}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-all duration-100" />
              <div className="relative flex flex-col gap-3">
                <Link
                  href={`/travel/${item.location}`}
                  className="text-xl lg:text-2xl absolute top-5 left-5">
                  {item.name}
                </Link>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
