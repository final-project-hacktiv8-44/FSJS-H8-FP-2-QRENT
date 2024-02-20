import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        <div className="flex justify-center">
          <div className="w-20 h-20">
            <Image src={logo} alt="logo" className="mx-auto" />
          </div>
        </div>
          <div className="px-5 py-2">
            <p className="text-base leading-6 text-gray-500 hover:text-gray-900">
              Q-Rent Rent Car adalah layanan penyewaan mobil yang menyediakan
              berbagai pilihan mobil berkualitas untuk kebutuhan perjalanan
              Anda. Dengan Q-Rent Rent Car, Anda dapat menemukan mobil yang
              sesuai dengan preferensi dan kebutuhan Anda, mulai dari mobil
              ekonomis hingga mobil mewah.
            </p>
          </div>
        </nav>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 Q-Rent, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
