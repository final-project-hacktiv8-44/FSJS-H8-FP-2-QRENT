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
    img:"https://media.discordapp.net/attachments/1219508221144731711/1238784773489426514/Rent_Car_2.png?ex=66408bb9&is=663f3a39&hm=837f31672e943573c747d3161036419d809f49195cc06e65c14719d69e69c74f&=&format=webp&quality=lossless&width=1630&height=538"
  },
  {
    img:"https://media.discordapp.net/attachments/1219508221144731711/1238784773141434390/Rent_Car_1_1.png?ex=66408bb9&is=663f3a39&hm=3e93f087a402347c51be4bba89b701e9d1f94a0e10487f3a2d02982799bb83ee&=&format=webp&quality=lossless&width=1630&height=538"
  },
  {
    img:"https://media.discordapp.net/attachments/1219508221144731711/1238783994112245811/Rent_Car_5.png?ex=66408aff&is=663f397f&hm=a1a1577eebbead00b5506c12000392c8c2a9197db5f36543e7b654621d3b1ca4&=&format=webp&quality=lossless&width=1630&height=538"
  },
  {
    img:"https://media.discordapp.net/attachments/1219508221144731711/1238783993676300318/Rent_Car_4.png?ex=66408aff&is=663f397f&hm=b86e73f3feaa5ec72db8ed39b2899c6caecd1b479b51725953fdca43559a98ce&=&format=webp&quality=lossless&width=1630&height=538"
  }
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
