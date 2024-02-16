import BookingForm from "@/components/Booking/BookingForm";
import ActiveSlider from "@/components/Home/ActiveSlider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type MyResponse<T = {}> = {
  message?: string;
  data?: T;
};

const BookingPage = ({ params }: { params: { _id: string } }) => {
  const handleSubmit = async (FormData: FormData) => {
    "use server";
    const bookingStart = FormData.get("bookingStart");
    const bookingEnd = FormData.get("bookingEnd");
    const ktp = FormData.get("ktp") == "on" ? true : false;
    const sim = FormData.get("sim") == "on" ? true : false;
    const age = FormData.get("age");
    console.log(ktp, "<<< ktp")
    const auth_wishlist_token = cookies()
      .get("Authorization")
      ?.value.split(" ")[1];
      console.log(auth_wishlist_token)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/booking/${params._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Cookie: `Authorization=${auth_wishlist_token}`,
          Cookie : cookies().toString()
        },
        cache: "no-store",
        body: JSON.stringify({ bookingStart, bookingEnd, ktp, sim, age }),
      }
    );
    const result = (await response.json()) as MyResponse;
    if (!response.ok) {
      return redirect(`/booking/${params._id}?error=${result.message}`);
    }
    return redirect(`/`);
  };
  console.log(handleSubmit, "<<<< handleSubmit");
  return (
    <>
    <div className="mt-20 flex flex-col items-center justify-center text-blue-400 bg-white w-full h-screen">
      <BookingForm handleSubmit={handleSubmit} />
    </div>
    <ActiveSlider />
    </>
  );
};

export default BookingPage;