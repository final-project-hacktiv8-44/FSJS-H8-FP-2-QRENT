import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo1.png";
import { FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import Logout from "../Logout/logout";
import { cookies } from "next/headers";
import { ProfileType } from "@/types/type";
import { MdHome } from "react-icons/md";

async function userProfile(): Promise<ProfileType> {
  const response = await fetch(`http://localhost:3000/api/users`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  return response.json();
}


export default async function Navbar() {
  const token = cookies().get("Authorization")?.value;
  const user = await userProfile();
  return (
    <div className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Image className="h-7 w-auto" src={logo} alt="" />
            <p className="sr-only">Qrent</p>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-blue-100 hover:text-gray-900"
              href="/cars"
            >
              <IoIosCar className="inline-block mr-2 h-5 w-5" />
              Select Cars
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-blue-100 hover:text-gray-900"
              href="/about"
            >
              <FaInfoCircle className="inline-block mr-2 h-4 w-4" />
              About Us
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-blue-100 hover:text-gray-900"
              href="/booking"
            >
              <FaBookOpen className="inline-block mr-2 h-4 w-4" />
              Booking
            </Link>
            <div className="dropdown dropdown-end mr-20">
              <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-blue-100 hover:text-gray-900">
                <button>
                  <FaUserAlt className="inline-block mr-2 h-4 w-4" />
                  User
                </button>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-blue-400 rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"} className="justify-between font-bold">
                    Profile
                  </Link>
                </li>
                {token ? (
                  <li>
                    <Logout />
                  </li>
                ) : (
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link
              aria-current="page"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium hover:scale-110 text-blue-400 transition duration-300 font-bold text-lg hover:text-orange-600"
              href="/"
            >
              <MdHome className="inline-block mr-2 h-5 w-5" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
