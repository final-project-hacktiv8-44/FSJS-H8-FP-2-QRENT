import DetailCar from "@/components/Cars/detailProduct";
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
    cache: "no-store",
  });

  return data.json();
}

export default async function Detail({ params }: { params: { slug: string } }) {
  const data = await detailProduct(params.slug);

  console.log(data, "<><><><><>");

  return (
    <div className="bg-white w-full h-screen">
      <div className="pt-2">
        <DetailCar data={data} />
      </div>
    </div>
  );
}
