'use client'
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

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const imgList = [
  {
    img:"https://i.postimg.cc/dVWjDXp8/Rent-Car.png"
  },
  {
    img:"https://i.postimg.cc/9MnJnfyg/Rent-Car-1.png"
  },
  {
    img:"https://i.postimg.cc/BQXkBrfn/Rent-Car-3.png"
  },
  {
    img:"https://i.postimg.cc/B66Yqz3z/Rent-Car-4.png"
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
                    <img className="h-[30rem] w-[100rem]" src={image.img} alt="" />
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
  );
}
