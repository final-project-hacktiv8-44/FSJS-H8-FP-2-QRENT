import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qrent | Easiest Way To Rent A Car",
  description: "The Best Rent Car Website",
  icons: { icon: [ { media: "(prefers-color-scheme: light)", url: "/assets/logo1.png", href: "/assets/logo1.png", }]},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
