"use server";

import { BookingType } from "@/types/type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type MyResponse = {
  message?: string;
  data?: BookingType;
};

export async function ChangeStatus(
  formData: FormData,
  { params }: { params: { _id: string } }
) {
  const status = formData.get("status");

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/booking/status/${params._id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "unpaid",
      }),
      cache: "no-store",
    }
  );

  const result = (await response.json()) as MyResponse;

  if (!response.ok) {
    return redirect(`/booking/status/${params._id}?error=${result.message}`);
  }

  revalidatePath(`/`, "layout");
  return redirect(`/booking/status/${params._id}`);
}
