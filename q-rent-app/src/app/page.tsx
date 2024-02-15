import AboutSection from "@/components/Home/AboutSection";
import ActiveSlider from "@/components/Home/ActiveSlider";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import FooterSection from "@/components/Home/SwiperFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white w-full h-screen">
        <ActiveSlider/>
        <div className="bg-white w-full h-screen">
        <AboutSection />
        </div>
        <FooterSection />
        <Footer />
      </div>
    </>
  );
}
