import BookingForm from "@/components/Booking/BookingForm";
import ActiveSlider from "@/components/Home/ActiveSlider";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type MyResponse<T = {}> = {
  message?: string;
  data?: T;
};

const BookingCarId = ({ params }: { params: { _id: string } }) => {
  const handleSubmit = async (FormData: FormData) => {
    "use server";
    const bookingStart = FormData.get("bookingStart");
    const bookingEnd = FormData.get("bookingEnd");
    const ktp = FormData.get("ktp") == "on" ? true : false;
    const sim = FormData.get("sim") == "on" ? true : false;
    const age = FormData.get("age");
    const auth_token = cookies().get("Authorization")?.value.split(" ")[1];
    console.log(auth_token);
    const response = await fetch(
      `http://localhost:3000/api/booking/${params._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
        cache: "no-store",
        body: JSON.stringify({ bookingStart, bookingEnd, ktp, sim, age }),
      }
    );
    const result = (await response.json()) as MyResponse;
    if (!response.ok) {
      return redirect(`/booking/${params._id}?error=${result.message}`);
    }
    return redirect(`/booking`);
  };
  return (
    <>
      <div className="pt-10 flex flex-col items-center justify-center text-blue-400 bg-white w-full h-screen">
        <BookingForm handleSubmit={handleSubmit} />
      </div>
      <ActiveSlider />
    </>
  );
};
export default BookingCarId;
