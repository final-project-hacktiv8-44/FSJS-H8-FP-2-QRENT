"use client";

import { isLogout } from "@/actions/logoutAction";
export default function Logout() {
  return (
    <div className="font-bold">
      <button onClick={() => isLogout()}>Logout</button>
    </div>
  );
}
