"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProfileType } from "@/types/type";
import Link from "next/link";

export default function UserProfile() {
  const [userProfile, setUserProfile] = useState<ProfileType>();

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/users");
      setUserProfile(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="bg-white w-full h-screen pt-5 pb-10">
      <div className="bg-white overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-center text-blue-400 pt-20 justify-center">
            Your Profile
          </h1>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center mr-4">
              {userProfile?.user.image ? (
                <img
                  src={userProfile?.user.image}
                  alt="Profile Picture"
                  className="w-60 h-60 rounded-full border-4 object-cover mr-40 border-blue-400 mb-10"
                />
              ) : (
                <Link href="/profile/profile-picture">
                  <p className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer mr-40">
                    Add Profile Picture
                  </p>
                </Link>
              )}
              <Link href="/profile/profile-picture">
                <span className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer mr-40">
                  Click to change profile picture
                </span>
              </Link>
            </div>
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.name || "--------------------"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">User name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.user.username || "--------------------"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.user.email || "--------------------"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Birth</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.birth || "--------------------"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Biodata</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.bio || "--------------------"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {userProfile?.address || "--------------------"}
                </dd>
              </div>
              <Link href={"/profile/edit-profile"}>
                <button className="bg-blue-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-2 px-4 rounded-full cursor-pointer mb-10 mt-10">
                  Edit Profile
                </button>
              </Link>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
