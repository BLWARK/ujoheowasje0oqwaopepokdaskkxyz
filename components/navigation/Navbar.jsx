"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk scroll ke elemen dengan ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Tutup menu setelah klik (untuk tampilan mobile)
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 w-full h-[80px] flex justify-center bg-opacity-30 backdrop-blur-md items-center ">
      <div className="cont w-[93%] h-full justify-between items-center flex">
        <Link href="/" passHref>
        <div className="logo w-full text-white font-bold 2xl:text-left">
        <Image
                src="/xyz-logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority={true}
                className="object-contain 2xl:object-cover"
              />
        </div>
        </Link>

        {/* Icon Hamburger untuk Mobile */}
        <div className="flex 2xl:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Navigasi */}
        <div
          className={`fixed top-0 right-0 w-full py-[250px] 2xl:-mt-0 -mt-[120px] bg-pink-950  bg-opacity-100 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } 2xl:relative 2xl:translate-x-0 2xl:flex 2xl:w-full 2xl:bg-transparent justify-end items-center gap-5 text-white font-bold`}
        >
          {/* Tombol Close dan Logo di Mobile Menu */}
          <div className="flex w-full p-6 items-center justify-end 2xl:hidden -mt-20">
            <button onClick={toggleMenu} className="text-white">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col 2xl:flex-row items-center justify-start  2xl:gap-28 pt-0 2xl:pt-0 gap-10 2xl:-mt-0  ">
            <Link href="/" passHref>
            <div role="button" className="logo text-green-500 font-bold text-[24px] 2xl:hidden flex justify-start nav-link">
            <Image
                src="/xyz-logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority={true}
                className="object-contain 2xl:object-cover mb-10 "
              />
            </div>
            </Link>

            {/* Home dengan routing ke halaman utama */}
            <Link href="/" passHref>
            
              <div role="button" className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link ">
                Home
              </div>
            </Link>

            {/* About us dengan scroll ke div sect-3 */}
            <div
            role="button"
              onClick={() => scrollToSection("About")}
              className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link "
            >
              About Us
            </div>

            {/* Service dengan scroll ke div content-service */}
            <div
            role="button"
              onClick={() => scrollToSection("Pillar")}
              className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link"
            >
              Our Pillars
            </div>
            <div
            role="button"
              onClick={() => scrollToSection("Services")}
              className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link"
            >
              Our Services
            </div>

            <div
            role="button"
              onClick={() => scrollToSection("Client")}
              className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link"
            >
              Our client
            </div>

            <div
            role="button"
              onClick={() => scrollToSection("Teams")}
              className="navbar py-2 2xl:py-0  text-white hover:text-[#D4365F] transition duration-300 nav-link"
            >
              Teams
            </div>

          
           
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
