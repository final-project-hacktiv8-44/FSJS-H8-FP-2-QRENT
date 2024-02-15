"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

const ServiceData = [
  {
    title: "Jakarta Barat",
    backgroundImage:"https://asset.kompas.com/crops/Y8Xyj0XJXwuxJ9hMpp3H5hj1B4Y=/100x82:900x615/1200x800/data/photo/2018/04/18/623178336.jpg",
  },
  {
    title: "Jakarta Selatan",
    backgroundImage:"https://ik.imagekit.io/tvlk/image/imageResource/2019/05/17/1558122422331-5329e61347b63777805251d85bd7e6a9.jpeg?tr=q-70",
  },
  {
    title: "Jakarta Utara",
    backgroundImage:"https://ik.imagekit.io/tvlk/blog/2022/11/nVEZSrvk-image.png?tr=dpr-2,w-675",
  },
  {
    title: "Jakarta Timur",
    backgroundImage:"https://ik.imagekit.io/tvlk/image/imageResource/2019/05/16/1558038738753-dda52c4c723d62a204eb5e00b8a46484.jpeg?tr=q-70",
  },
  {
    title: "Jakarta Pusat",
    backgroundImage:"https://ik.imagekit.io/tvlk/image/imageResource/2019/05/26/1558888993084-3cfa5320e56385a205363963c7894a0d.jpeg?tr=q-70",
  },
];

export default function ActiveSlider() {
  return (
       <div className="flex items-center justify-center flex-col h-[900px] bg-white">
    <h1 className="text-4xl font-bold text-center text-orange-600 mb-16 font-bold">Our Rent Region</h1>
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
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-all duration-100" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl absolute top-5 left-5">
                  {item.title}{" "}
                </h1>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

