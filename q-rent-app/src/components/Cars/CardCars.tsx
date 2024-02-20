'use client';
import Link from "next/link";
import { IoMdCalendar, IoMdColorPalette } from "react-icons/io";
import { formatToRupiah } from "@/db/helpers/formatter";
import { CarType } from "@/types/type";

const Card = ({ car }: { car: CarType }) => {
  const prices = formatToRupiah(car.pricePerDay);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-110 cursor-pointer">
      <div className="aspect-w-16 aspect-h-9">
      <Link href={`/cars/${car.slug}`}>
        <img
          className="object-cover w-full h-full"
          src={car.thumbnail}
          alt="Car Thumbnail"
        />
         </Link>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">{car.brand}</p>
        </div>
        <p className="text-lg font-semibold text-gray-800">{car.name}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-600 mr-2">
            <IoMdColorPalette className="mr-1" /> {car.color}
          </div>
          <div className="flex items-center text-gray-600 mr-2">
            <IoMdCalendar className="mr-1" /> {car.year}
          </div>
          <p className="text-lg font-semibold text-gray-800">{prices}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
