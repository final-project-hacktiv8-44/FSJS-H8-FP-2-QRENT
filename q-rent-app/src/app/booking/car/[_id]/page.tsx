import DetailBooking from "@/components/Booking/detailBooking";
import { BookingType } from "@/types/type";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { slug: string };
};

type BookingCar = {
  booking: BookingType;
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const slug = params.slug;

//   const data = (await fetch( `http://localhost:3000/api/cars/${slug}`,{
//     cache: 'no-store'
//   }
// )
//   .then((res) => res.json())) as BookingType;

//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: `Select Cars | ${data.car.name}`,
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

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
  // console.log(data, "<<<<<");
  return (
    <div className="bg-white w-full h-screen">
      <div className="mt-20">
        <DetailBooking data={data.booking} />
      </div>
    </div>
  );
}
