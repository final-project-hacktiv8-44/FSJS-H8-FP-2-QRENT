import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import Logout from "../Logout/logout";
import { cookies } from "next/headers";
import { ProfileType } from "@/types/type";

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
  // console.log(user, "<<<<");
  return (
    <nav className="bg-white p-4 fixed w-full top-0 shadow-xl z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center">
          <Link href="/">
            <div className="hover:scale-110 transition duration-300">
              <Image src={logo} alt="Logo" className="w-28 h-22 ml-10" />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/cars"
            className="nav-link hover:scale-110 text-blue-400 transition duration-300 font-bold text-lg hover:text-orange-600"
          >
            <IoIosCar className="inline-block mr-2" /> Select Cars
          </Link>
          <Link
            href="/about"
            className="nav-link hover:scale-110 text-blue-400 transition duration-300 font-bold text-lg hover:text-orange-600"
          >
            <FaInfoCircle className="inline-block mr-2" /> About Us
          </Link>
          <Link
            href="/booking"
            className="nav-link hover:scale-110 text-blue-400 transition duration-300 font-bold text-lg hover:text-orange-600"
          >
            <FaBookOpen className="inline-block mr-2"/> My Booking
          </Link>
          <div className="dropdown dropdown-end mr-20">
            <div className="w-[50] h-[50] text-blue-400 hover:scale-110 transition duration-300 font-bold">
              <button>
                <FaUserAlt className="inline-block mr-2"/>User
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
      </div>
    </nav>
  );
}
