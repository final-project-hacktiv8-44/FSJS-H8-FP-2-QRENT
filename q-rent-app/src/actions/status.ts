"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function StatusBooking(_id: string) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/booking/status/${_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        status: "unpaid",
      }),
    }
  );

  revalidatePath("/", "layout");
  redirect(`/booking/car/${_id}`);
}
