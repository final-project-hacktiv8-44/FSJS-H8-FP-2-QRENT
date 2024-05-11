import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <section className="bg-white pt-20">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="flex justify-center">
            <div className="w-20 h-20">
              <Image src={logo} alt="logo" className="mx-auto" />
            </div>
          </div>
          <div className="px-5 py-2">
            <p className="text-base text-center leading-6 text-gray-500 hover:text-blue-400">
              Q-Rent stands out as a premier car rental service, offering a
              comprehensive selection of top-quality vehicles tailored to meet
              your diverse travel demands. Whether you are planning a weekend
              getaway, a family vacation, or a business trip, Q-Rent is your
              go-to destination for finding the perfect vehicle to enhance your
              travel experience.Discover the freedom and flexibility of renting
              a car with Q-Rent today. Whether you are a seasoned traveler or
              embarking on your first journey, trust Q-Rent to provide you with
              the perfect vehicle to make your trip unforgettable.
            </p>
          </div>
        </nav>
        <p className="mt-8 text-orange-500 text-lg leading-6 text-center">
          © 2024 Q-Rent, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
