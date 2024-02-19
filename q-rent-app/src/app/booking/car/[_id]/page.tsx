import DetailBooking from "@/components/Booking/detailBooking";
import { BookingType } from "@/types/type";
import { cookies } from "next/headers";

type BookingCar = {
  booking: BookingType;
};

async function detailProduct(_id: string): Promise<BookingCar> {
  const data = await fetch(`http://localhost:3000/api/booking/car/${_id}`, {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });

  return data.json();
}

export default async function Detail({ params }: { params: { _id: string } }) {
  const data = await detailProduct(params._id);
  return (
    <div className="bg-white w-full h-screen">
      <div className="pt-10">
        <DetailBooking data={data.booking} />
      </div>
    </div>
  );
}
