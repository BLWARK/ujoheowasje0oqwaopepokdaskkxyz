"use client";
import React, { useState, useEffect } from "react";
import { FaTimes, FaAlignRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <div className="flex 2xl:hidden xl:hidden gap-6 z-50">
        <Link href="/main/pricing" passHref>
            <div
              role="button"
             
              className={`navbar py-2 px-6 text-white text-sm hover:scale-105 hover:border-2 border-2 border-cyan-400  bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-lg transition duration-300 nav-link cursor-custom ${animate ? "pulsePricing" : ""}`}
            >
              Pricing
            </div>
          </Link>
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaAlignRight size={24} />}
          </button>
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden 2xl:flex xl:flex 2xl:text-[14px] xl:text-[14px] justify-end items-center gap-14 text-white font-bold z-50">
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
          <Link href="/main/pricing" passHref>
            <div
              role="button"
             
              className={`navbar py-2 px-8 text-white hover:scale-105 hover:border-2 border-2 border-cyan-400  bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-xl transition duration-300 nav-link cursor-custom ${animate ? "pulsePricing" : ""}`}
            >
              Pricing
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
