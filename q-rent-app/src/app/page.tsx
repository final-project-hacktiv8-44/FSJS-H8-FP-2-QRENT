import ActiveSlider from "@/components/Home/ActiveSlider";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import FooterSection from "@/components/Home/SwiperFooter";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white w-full h-screen mt-20">
        <div className="bg-white w-full h-screen">
          <Hero />
          <ActiveSlider />
          <FooterSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
