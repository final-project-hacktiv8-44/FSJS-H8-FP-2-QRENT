import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import FooterSection from "@/components/Home/SwiperFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Select Cars | Qrent",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterSection/>
        <Footer />
        </body>
    </html>
  );
}
