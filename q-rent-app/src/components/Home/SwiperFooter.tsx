"use client";

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
import { MyResponse, SectionType } from "@/types/type";

export default function FooterSection() {
  const [data, setData] = useState<SectionType[]>([]);
  const fetchSection = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/section`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: MyResponse = await response.json();
      setData(result.section);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSection();
  }, []);
  return (
    <section className="pt-[7rem] pb-[2rem] bg-white">
      <div className="lg:mx-auto max-w-5xl">
        <h1 className="text-[3rem] font-bold text-orange-600 mb-[2rem] text-center">
          How To Rent Our Cars
        </h1>
        {data.length > 0 && (
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect={"coverflow"}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              slideShadows: false,
            }}
            className="coverflow">
            {data.map((section, index) => (
              <SwiperSlide key={index}>
                <img src={section.image} alt={section.excerpt} />
                <p className="text-center text-black font-bold">
                  {section.excerpt}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
