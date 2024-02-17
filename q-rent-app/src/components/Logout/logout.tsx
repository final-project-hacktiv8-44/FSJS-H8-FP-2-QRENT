"use client";

import { isLogout } from "@/actions/logoutAction";
export default function Logout() {
  return (
    <div>
      <p onClick={() => isLogout()}>Logout</p>
    </div>
  );
}
