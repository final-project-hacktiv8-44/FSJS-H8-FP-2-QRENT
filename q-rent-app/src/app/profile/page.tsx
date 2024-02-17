"use client";
import { ProfileType } from "@/types/type";
import axios from "axios";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [userP, setUserP] = useState<ProfileType>();

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/users");

      setUserP(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile User</h1>
    </div>
  );
}
