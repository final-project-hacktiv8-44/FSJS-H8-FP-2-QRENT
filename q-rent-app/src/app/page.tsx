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
    `http://localhost:3000/api/cars?page=${page}&pageSize=${pageSize}`,
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
  const pageSize = params.pageSize || 4;
  const page = 1;
  const { products } = await selectCars(page, pageSize);

  return (
    <>
      <Navbar />
      <div className="bg-white w-full h-screen pt-20">
        <Hero />
        <div className="bg-white w-full h-screen pt-20">
          <div>
            <div className="mb-4 pt-1">
              <h1 className="text-center text-[2rem] font-bold text-blue-400">
                Featured Cars
              </h1>
            </div>

            <Link href="/cars">
              <div className="flex justify-end mx-[15rem] items-center text-blue-400 font-bold mb-5">
                <p className="mr-2 text-blue-400 font-bold">See All Cars</p>
                <MdKeyboardDoubleArrowRight />
              </div>
            </Link>
            <div className="bg-white flex justify-center mx-[10rem]">
              <div className="flex justify-between mx-[5rem] object-cover w-full h-full mt-8 gap-8">
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
