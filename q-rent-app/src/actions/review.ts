import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function UserReview(_id: string, formData: FormData) {
  const review = formData.get("review");
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/api/booking/status/${_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify({
        review,
      }),
    }
  );

  revalidatePath("/", "layout");
  redirect(`/booking/car/${_id}`);
}
