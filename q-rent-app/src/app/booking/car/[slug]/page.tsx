import DetailBooking from "@/components/Booking/detailBooking";
import { BookingType } from "@/types/type";
import { cookies } from "next/headers";


async function detailProduct(_id: string): Promise<BookingType> {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/booking/${_id}`,{
      cache: "no-store",
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      }
    }
  );

  return data.json()
}

export default async function Detail({ params }: { params: { _id: string } }) {
  const data = await detailProduct(params._id);
// console.log(data, "<<<<<")
  return (
    <div className="bg-white w-full h-screen">
      <div className="mt-20">
      <DetailBooking data={data} />
      </div>
    </div>
  );
}