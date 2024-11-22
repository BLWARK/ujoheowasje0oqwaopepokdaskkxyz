import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer"
import ScrollTop from "@/components/scroll-to-top/Scroll"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"], // Menambahkan weight untuk font
});

export const metadata: Metadata = {
  title: "XYZ Group",
  description: "Bisnis Ekosistem Kreatif Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className="relative overflow-hidden bg-gray-700">
      <Navbar  />
          
          {/* Hero Section */}
          <div className="relative  " >
          
            {children}
           
          </div>
          <Footer  />
          <ScrollTop/>
        </div>
        
      </body>
    </html>
  );
}
