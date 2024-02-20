'use client';
import Link from "next/link";
import { IoMdCalendar, IoMdColorPalette } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { formatToRupiah } from "@/db/helpers/formatter";
import { CarType } from "@/types/type";


const Card = ({ car }: { car: CarType }) => {
  const prices = formatToRupiah(car.pricePerDay);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-110 cursor-pointer">
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
        <p className="text-lg font-semibold text-gray-800 text-center">{car.brand} {car.name}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-gray-600">
            <IoMdColorPalette className="mr-1"/> {car.color}
          </div>
          <div className="flex items-center text-gray-600">
            <MdPlace className="mr-1"/> {car.region}
          </div>
        </div>
        {/* Prices */}
        <div className="mt-6 flex justify-center">
          <p className="text-lg font-semibold text-gray-800">{prices}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
