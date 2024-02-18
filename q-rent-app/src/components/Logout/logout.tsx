"use client";

import { isLogout } from "@/actions/logoutAction";
export default function Logout() {
  return (
    <div>
      <button onClick={() => isLogout()}>Logout</button>
    </div>
  );
}
