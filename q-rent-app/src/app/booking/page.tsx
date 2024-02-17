import BookingAllCard from "@/components/Booking/BookingAllCard";
import { BookingType } from "@/types/type";
import { cookies } from "next/headers";

type MyResponse = {
  listBooking: BookingType[];
  message?: string;
};

async function dataBooking(): Promise<MyResponse> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/booking`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  return data.json();
}
export default async function Booking() {
  const booking = await dataBooking();
  return (
    <div className="bg-white w-full h-screen mt-20">
    <div className="bg-white w-full h-screen mt-28">
    <h1 className="text-3xl font-bold text-center text-blue-400 mb-10">My Booking</h1>
      <div className="overflow-x-auto text-black text-center">
        <table className="table">
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Car Image</th>
              <th>Car Name</th>
              <th>Car Type</th>
              <th>Car Brand</th>
              <th>Color</th>
              <th>Region</th>
              <th>Booking Start</th>
              <th>Booking End</th>
              <th>Total Price</th>
              <th>User</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {booking.listBooking.map((el, i) => (
              <BookingAllCard booking={el} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
