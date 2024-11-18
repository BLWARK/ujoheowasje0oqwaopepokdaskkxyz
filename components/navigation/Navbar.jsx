"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk scroll ke elemen dengan ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      // Animasi scroll ke elemen target
      element.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      // Navigasi ke halaman Home dengan hash
      window.location.href = `/#${sectionId}`;
    }

    setIsMobileMenuOpen(false); // Tutup menu setelah klik (untuk tampilan mobile)
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full h-[80px] flex justify-center bg-opacity-30 backdrop-blur-md items-center">
      <div className="cont w-[93%] h-full justify-between items-center flex">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="logo w-full text-white font-bold 2xl:text-left">
            <Image
              src="/xyz-logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority={true}
              className="object-contain 2xl:object-cover cursor-custom"
            />
          </div>
        </Link>

        {/* Icon Hamburger untuk Mobile */}
        <div className="flex 2xl:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden 2xl:flex justify-end items-center gap-20 text-white font-bold">
          <Link href="/" passHref>
            <div className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom">
              Home
            </div>
          </Link>
          <Link href="/#About" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("About");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              About Us
            </div>
          </Link>
          <Link href="/#Pillar" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Pillar");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Pillars
            </div>
          </Link>
          <Link href="/#Services" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Services");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Services
            </div>
          </Link>
          <Link href="/#Client" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Client");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Client
            </div>
          </Link>
          <Link href="/#Teams" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Teams");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Teams
            </div>
          </Link>
        </div>

        {/* Navigasi Mobile */}
        <div
          className={`fixed overflow-hidden h-[1000px] xl:h-[1024px] md:h-[1200px] -mt-[150px] top-0 right-0 w-full bg-pink-950 bg-opacity-100 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0 z-20" : "translate-x-full z-[-10]"
          } 2xl:hidden flex flex-col justify-center items-center gap-10 text-white font-bold`}
        >
           {/* Tombol Close */}
           <button
            onClick={toggleMobileMenu}
            className="absolute top-[230px] -translate-y-[50px] right-8 text-white"
          >
            <FaTimes size={24} />
          </button>
          <Link href="/" passHref>
          <div className="logo w-full text-white font-bold 2xl:text-left">
            <Image
              src="/xyz-logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority={true}
              className="object-contain 2xl:object-cover cursor-custom"
            />
          </div>
        </Link>
          <Link href="/" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Home");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Home
            </div>
          </Link>
          <Link href="/#About" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("About");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              About Us
            </div>
          </Link>
          <Link href="/#Pillar" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Pillar");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Pillars
            </div>
          </Link>
          <Link href="/#Services" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Services");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Services
            </div>
          </Link>
          <Link href="/#Client" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Client");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Our Client
            </div>
          </Link>
          <Link href="/#Teams" passHref>
            <div
              role="button"
              onClick={(e) => {
                e.preventDefault(); // Mencegah default hash URL melompat langsung
                scrollToSection("Teams");
              }}
              className="navbar py-2 text-white hover:text-[#D4365F] transition duration-300 nav-link cursor-custom"
            >
              Teams
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
