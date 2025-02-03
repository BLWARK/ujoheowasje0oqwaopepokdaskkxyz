import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/scroll-to-top/Scroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"], // Menambahkan weight untuk font
});

export const metadata: Metadata = {
  title: "XYZ Group | Bisnis Ekosistem Kreatif Indonesia",
  description:
    "XYZ Group adalah ekosistem kreatif yang memimpin di Indonesia, mendukung pertumbuhan bisnis Anda melalui solusi inovatif. Bergabunglah dengan kami hari ini!",
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png", // Opsional, untuk perangkat Apple
    },
  keywords: [
    "XYZ Group",
    "ekosistem kreatif",
    "solusi bisnis",
    "inovasi Indonesia",
    "pertumbuhan bisnis",
    "teknologi kreatif",
  ].join(", "),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xyzgroup.co.id", // Ganti dengan domain Anda
    title: "XYZ Group | Bisnis Ekosistem Kreatif Indonesia",
    description:
      "XYZ Group adalah ekosistem kreatif yang memimpin di Indonesia, mendukung pertumbuhan bisnis Anda melalui solusi inovatif. Bergabunglah dengan kami hari ini!",
    siteName: "XYZ Group",
    images: [
      {
        url: "https://xyzgroup.co.id/og-image.jpg", // URL gambar Open Graph (harus relevan dan menarik)
        width: 1200,
        height: 630,
        alt: "XYZ Group - Bisnis Ekosistem Kreatif Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xyzgroup", // Ganti dengan handle Twitter Anda
    title: "XYZ Group | Bisnis Ekosistem Kreatif Indonesia",
    description:
      "XYZ Group adalah ekosistem kreatif yang memimpin di Indonesia, mendukung pertumbuhan bisnis Anda melalui solusi inovatif. Bergabunglah dengan kami hari ini!",
    images: [
      "https://xyzgroup.co.id/twitter-image.jpg", // URL gambar untuk Twitter (pastikan menarik perhatian)
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xyzgroup.co.id", // URL utama halaman
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>

      <body className={poppins.className}>
        <div className="relative overflow-hidden bg-gray-700">
          <Navbar />

          {/* Hero Section */}
          <div className="relative">{children}</div>

          <Footer />
          <ScrollTop />
        </div>
      </body>
    </html>
  );
}
