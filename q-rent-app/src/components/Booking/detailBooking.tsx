"use client";
import { BookingType, MidtransResponseType, UserType } from "@/types/type";
import {
  IoMdCar,
  IoMdColorPalette,
  IoMdCalendar,
  IoMdSpeedometer,
} from "react-icons/io";
import { MdAirlineSeatReclineNormal, MdPlace } from "react-icons/md";
import { GiKeyCard } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { formatToRupiah } from "@/db/helpers/formatter";
import useMidtrans from "@/actions/useMidtrans";
import { useRouter } from "next/navigation";
import { getCookies } from "cookies-next";
import ButtonStatus from "../buttonStatus/buttonStatus";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DetailBooking({ data }: { data: BookingType }) {
  const [user, setUser] = useState<UserType>();
  const [review, setReview] = useState({
    review: "",
  });

  const createReview = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:3000/api/feedback/${data._id}`,
        review
      );
      router.push(`/cars/${data.car.slug}`);
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/user`);
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const [rev, setRev] = useState(false);

  useMidtrans("https://app.sandbox.midtrans.com/snap/snap.js");
  const router = useRouter();
  useEffect(() => {
    fetchUser();
  }, []);

  const prices = formatToRupiah(data.totalPrice);

  const handlePayment = async () => {
    const response = await fetch(
      `http://localhost:3000/api/booking/payment/${data._id}`,
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          Cookie: getCookies().toString(),
        },
        method: "POST",
      }
    );

    const respJson = await response.json();

    if (typeof window !== "undefined") {
      (window as any)?.snap.pay(respJson.transactionToken, {
        onSuccess: async function (result: MidtransResponseType) {
          router.refresh();
        },
        onPending: function (result: MidtransResponseType) {},
        onError: function (result: MidtransResponseType) {},
      });
    }
  };

  const _id = data._id.toString();

  return (
    <div className="flex flex-col mt-[5rem] ml-[10rem]">
      <div className="mx-[5rem] flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <img
              className="w-[47rem] h-[30rem]"
              src={data.car.thumbnail}
              alt={data.car.name}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-end">
            <div>
              <p className="px-2 py-1 bg-orange-500 rounded w-[7rem] h-[2rem] text-white font-bold text-md text-center mr-2">
                {data.status}
              </p>
            </div>
            <div>
              <form>
                <div className="form-control">
                  <label className="text-black"></label>
                  <select className="px-2 py-1 bg-white rounded border border-blue-400 text-black">
                    <option>unpaid</option>
                    <option>rent</option>
                    <option>returned</option>
                    <option>cancel</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <p className="px-6 py-1 bg-blue-400 rounded w-[18rem] h-[2rem] text-white font-bold text-md text-center mr-2">{_id}</p>

          <div className="border border-gray-100 rounded-lg p-8 shadow-xl">
            <div className="flex flex-col gap-5 text-black">
              <div className="flex flex-col gap-2">
                <h3 className="font-secondary text-[2rem]">
                  {data.car.brand} {data.car.name}
                </h3>
                <h4 className="text-[1rem]">{prices}</h4>
                <div className="flex flex-row gap-2 items-center">
                  <h4 className="font-semibold">
                    <span className="mr-2">
                      <IoMdColorPalette className="text-blue-400 inline" />
                    </span>
                    Warna: {data.car.color}
                  </h4>
                </div>
                <h4 className="font-semibold">
                  <span className="mr-2">
                    <MdPlace className="text-blue-400 inline" />
                  </span>
                  Region: {data.car.region}
                </h4>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 rounded-lg p-8 shadow-xl text-black flex flex-col gap-2">
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdCar className="text-blue-400 inline" />
              </span>
              Tipe: {data.car.type}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <FaAddressCard className="text-blue-400 inline" />
              </span>
              Plat: {data.car.plat}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdCalendar className="text-blue-400 inline" />
              </span>
              Year: {data.car.year}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <GiKeyCard className="text-blue-400 inline" />
              </span>
              Transmission: {data.car.transmission}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <BsFillFuelPumpFill className="text-blue-400 inline" />
              </span>
              Fuel: {data.car.BbmType}
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <MdAirlineSeatReclineNormal className="text-blue-400 inline" />
              </span>
              Seat: {data.car.seat} Seats
            </p>
            <p className="font-semibold">
              <span className="mr-2">
                <IoMdSpeedometer className="text-blue-400 inline" />
              </span>
              Km: {data.car.kilometer}
            </p>

            <div>
              {user?.role !== "customer" ? (
                <ButtonStatus _id={_id} status={data.status} />
              ) : (
                <div>
                  {data.status !== "returned" ? (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5"
                      onClick={handlePayment}
                    >
                      Payment
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-5 transition-all duration-300"
                      onClick={() => {
                        setRev(true);
                      }}
                    >
                      Review
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[5rem] mr-[10rem] mt-[2rem] mb-12">
        {rev === true ? (
          <form onSubmit={createReview}>
            <div>
              <input
                type="text"
                name="review"
                value={review.review}
                onChange={change}
                className="w-[65rem] h-[5rem] rounded-lg bg-white outline outline-1 outline-black pl-4 text-black"
                placeholder="Give your best feedback"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[8rem] mt-5 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
