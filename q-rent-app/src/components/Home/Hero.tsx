"use client";

import { useState } from "react";

import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
import SwiperCore from "swiper/core";
import Link from "next/link";

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const imgList = [
  {
    img:"https://i.postimg.cc/28D6pwv3/banner1.png"
  },
  {
    img:"https://i.postimg.cc/44Yz6KSH/banner3.png"
  },
  {
    img:"https://i.postimg.cc/6qZ2DvkH/banner2.png"
  },
  {
    img:"https://i.postimg.cc/Cx0ZZd88/RENT-Car.png"
  },
];

export default function Hero() {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore | null>(null);
  const [activeThumb, setActiveThumb] = useState<SwiperCore | null>(null);

  const handleImageSlide = (index: number) => {
    if (mainSwiper && activeThumb) {
      mainSwiper.slideTo(index);
    }
  };

  return (
    <Link href="/cars">
    <div className="bg-white w-full h-screen">
    <section className="pt-[2rem] pb-[2rem]">
      <div className="mx-[5rem]">
        <div className="border-8 bg-white border-white">
          <Swiper
            modules={[Navigation, Thumbs, Autoplay]}
            loop={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            navigation={true}
            thumbs={{ swiper: activeThumb }}
            onSwiper={(swiper) => setMainSwiper(swiper)}
            className="thumbShow">
            {imgList.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img className="h-[35rem] w-[100rem]" src={image.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className="thumbBtn mt-5">
            {imgList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="" onClick={() => handleImageSlide(index)}>
                  <img src={item.img} alt="product images" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </div>
    </Link>
  );
}
