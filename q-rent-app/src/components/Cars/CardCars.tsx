'use client';
import Link from "next/link";
import { IoMdCalendar, IoMdColorPalette, IoMdEye } from "react-icons/io";
import { formatToRupiah } from "@/db/helpers/formatter";
import { CarType } from "@/types/type";

export default function Card({ cars }: { cars: CarType}) {
  const prices = formatToRupiah(cars.pricePerDay);

  const id = cars._id.toString();
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:shadow-lg hover:scale-110 cursor-pointer">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover w-full h-full"
          src={cars.thumbnail}
          alt="Car Thumbnail"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-600">{cars.brand}</p>
          <Link href={"/cars/" + cars.slug}>
            <IoMdEye className="text-gray-600" />
          </Link>
        </div>
        <p className="text-lg font-semibold text-gray-800 mb-2">{cars.name}</p>
        <div className="flex justify-between items-center">
          {/* Menampilkan ikon warna, warna, ikon tahun, dan tahun */}
          <div className="flex items-center text-gray-600 mr-2">
            <IoMdColorPalette className="mr-1" /> {cars.color}
          </div>
          <div className="flex items-center text-gray-600 mr-2">
            <IoMdCalendar className="mr-1" /> {cars.year}
          </div>
          <p className="text-lg font-semibold text-gray-800">{prices}</p>
        </div>
      </div>
    </div>
  );
}
