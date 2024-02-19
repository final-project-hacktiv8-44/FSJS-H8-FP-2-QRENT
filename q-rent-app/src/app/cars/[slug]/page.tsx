import DetailCar from "@/components/Cars/detailProduct";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { CarType } from "@/types/type";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const data = (await fetch(`http://localhost:3000/api/cars/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json())) as MyResponse;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Select Cars | ${data.car.name}`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

type MyResponse = {
  car: CarType;
};

async function detailProduct(slug: string): Promise<MyResponse> {
  const data = await fetch(`http://localhost:3000/api/cars/${slug}`, {
    cache: "no-store"
  });

  return data.json();
}

export default async function Detail({ params }: { params: { slug: string } }) {
  const data = await detailProduct(params.slug);

  return (
    <>
    <Navbar/>
    <div className="bg-white w-full h-full">
      <div className="pt-5 pb-5">
        <DetailCar data={data} />
      </div>
      <Footer/>
    </div>
    </>
  );
}
