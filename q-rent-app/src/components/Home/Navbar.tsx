import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { FaInfoCircle, FaUserAlt } from "react-icons/fa";
import { IoIosCar } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import Logout from "../Logout/logout";
import { cookies } from "next/headers";

export default function Navbar() {
  const token = cookies().get("Authorization")?.value;
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
            className="nav-link py-5 px-5 rounded hover:bg-orange-600 hover:text-white hover:scale-110 text-orange-600 transition duration-300 font-bold text-xl">
            <IoIosCar className="inline-block mr-2" /> Select Cars
          </Link>
          <Link
            href="/about"
            className="nav-link py-5 px-5 rounded hover:bg-blue-400 hover:text-white hover:scale-110 text-blue-400 transition duration-300 font-bold text-xl">
            <FaInfoCircle className="inline-block mr-2" /> About
          </Link>
          <div className="dropdown dropdown-end mr-20">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              <div className="w-[50] h-[50] rounded-full overflow-hidden hover:scale-150 transition duration-300">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link href={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
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
