import BookingAllCard from "@/components/Booking/BookingAllCard";
import { BookingType } from "@/types/type";
import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

type MyResponse = {
    listBooking: BookingType[];
    message?: string;
}

async function dataBooking(): Promise<MyResponse> {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/booking`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          // Cookie: `Authorization=${auth_token}`,
          Cookie : cookies().toString()
        }
      }
    );
  
    return data.json();
  }
export default async function Booking() {
    const booking = await dataBooking()
    // console.log(booking)
  return (
    <div>
      <div className="mx-[5rem]">
        <h1 className="mt-[2rem] text-center font-third text-[2rem] font-semibold">
          My Wishlist
        </h1>

        <div className="flex flex-row justify-evenly my-[4rem] border-b-2 items-center">
          <button className="focus:border-b-4 focus:border-b-black pb-4 focus:w-1/3 w-1/3">
            <p className="text-center">Sold Out</p>
          </button>

          <button className="focus:border-b-4 focus:border-b-black pb-4 focus:w-1/3 w-1/3 active:w-1/3 active:border-b-black active:focus:border-b-4">
            <p className="text-center">All</p>
          </button>

          <button className="focus:border-b-4 focus:border-b-black pb-4 focus:w-1/3 w-1/3">
            <p className="text-center">In Stock</p>
          </button>
        </div>

        <div className="flex flex-row flex-wrap gap-8">
          {booking.listBooking.map((book, i) => {
            return (
              <BookingAllCard booking={book} key={i} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
