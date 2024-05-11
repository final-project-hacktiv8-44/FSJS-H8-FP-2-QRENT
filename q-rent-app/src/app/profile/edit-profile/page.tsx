"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileType } from "@/types/type";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<ProfileType>();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    bio: "",
    birth: "",
  });
  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "/api/users");
      setUserProfile(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", formData);

      fetchProfile();
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white w-full h-screen pt-5 text-blue-400">
      <div className="bg-white overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-center text-blue-400 mt-28 justify-center">
            Your Profile
          </h1>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center mr-40">
              {userProfile?.user.image ? (
                <img
                  src={userProfile?.user.image}
                  alt="Profile Picture"
                  className="w-60 h-60 rounded-full border-4 object-cover mr-10 mb-10"
                />
              ) : (
                <Link href="/profile/profile-picture">
                  <p className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer mb-10">
                    Add Profile Picture
                  </p>
                </Link>
              )}
              <Link href="/profile/profile-picture">
                <span className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer">
                  Click to change profile picture
                </span>
              </Link>
            </div>

            <form
              onSubmit={handleSubmit}
              className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-blue-400">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Biodata</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-1 outline outline-gray-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Birth</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input
                    type="date"
                    name="birth"
                    value={formData.birth}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-1 outline outline-geay-100 bg-slate-200 rounded-md text-slate-800 focus:outline-none focus:border-blue-400"
                  />
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
