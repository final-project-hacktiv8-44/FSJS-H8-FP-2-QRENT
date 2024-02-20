import Card from "@/components/Cars/CardCars";
import ActiveSlider from "@/components/Home/ActiveSlider";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import FooterSection from "@/components/Home/SwiperFooter";
import { CarType } from "@/types/type";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type MyResponse = {
  products: CarType[];
};

async function selectCars(page: number, pageSize: number): Promise<MyResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?page=${page}&pageSize=${pageSize}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

export default async function Home({
  params,
}: {
  params: {
    pageSize: number;
  };
}) {
  const pageSize = params.pageSize || 5;
  const page = 1;
  const { products } = await selectCars(page, pageSize);
  console.log(products)

  return (
    <>
      <Navbar />
      <div className="bg-white w-full h-screen pt-20">
          <Hero />
        <div className="bg-white w-full h-screen pt-40">
          
          <div>
            <div className="mb-4 pt-10">
              <h1 className="text-center text-[2rem] font-bold text-blue-400">
                Featured Cars
              </h1>
            </div>

            <Link href="/cars">
              <div className="flex justify-end mx-[5rem] mb-3 items-center text-blue-400 font-bold mb-10">
                <p className="mr-2 text-blue-400 font-bold">See All Cars</p>
                <MdKeyboardDoubleArrowRight />
              </div>
            </Link>
            <div className="bg-white flex justify-center">
            <div className="flex justify-between mx-[5rem] gap-3 object-cover w-full h-full mt-10 ">
              {products.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            </div>

            <ActiveSlider />
            <FooterSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
