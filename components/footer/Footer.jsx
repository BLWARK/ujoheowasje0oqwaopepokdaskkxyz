"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-full flex flex-col bg-gray-900 ">
      <div className="h-full flex flex-col 2xl:flex-row xl:flex-row justify-start items-start">
        {/* Seksi 1 */}
        <div className="foot-sec1 px-10 py-10 2xl:px-20 2xl:py-20 w-full 2xl:w-[25%] flex flex-col justify-start items-start">
          <div className="Logo text-white font-bold text-[24px] 2xl:text-[32px]">
            <Image
              src="/xyz-logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority={true}
              className="object-contain 2xl:object-cover"
            />
          </div>
          <div className="sub-judul py-5 2xl:py-7 text-gray-400 text-[14px] 2xl:text-[18px]">
            <p>Wisma Aria FI. 2 Room 204</p>
            <p>JI. HOS. Cokroaminoto No.81, Menteng, Central Jakarta 10310</p>
          </div>
          <div className="contact flex justify-start items-center gap-4">
            <div className="w-[20px] h-[5px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Contact Us</div>
          </div>
          <div className="contact mt-5 flex justify-start items-center gap-4">
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">
              Phone : +62 81295095096
            </div>
          </div>
          <div className="contact mt-5 flex justify-start items-center gap-4">
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">
              Email : info@xyzgroup.co.id
            </div>
          </div>
        </div>

        {/* Seksi 2 */}
        <div className="foot-sec2 px-10 py-10 2xl:px-20 2xl:py-20 w-full 2xl:w-[25%] flex flex-col justify-start items-start gap-3">
          <div className="Logo text-white font-bold text-[18px] 2xl:text-[22px]">
            XYZ Creative Group
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("home")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Home</div>
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("About")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">About Us</div>
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("Pillar")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Our Pillars</div>
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("Services")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Our Services</div>
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("Client")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Our Client</div>
          </div>
          <div
            role="button"
            onClick={() => scrollToSection("Teams")}
            className="contact mt-3 flex justify-start items-center gap-4  nav-link cursor-custom"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="contact font-bold text-white">Teams</div>
          </div>
        </div>

        {/* Seksi 3 */}
        <div className="foot-sec3 px-10 py-10 2xl:px-20 2xl:py-20 w-full 2xl:w-[25%] flex flex-col justify-start items-start gap-3">
          <div className="Logo text-white font-bold text-[18px] 2xl:text-[22px]">
            Ecosystem
          </div>

          {/* Ecosystem Links */}
          <a
            href="https://xyzonemedia.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact mt-3 flex justify-start items-center gap-4 cursor-custom nav-link"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="font-bold text-white">XYZONE Media</div>
          </a>

          <a
            href="https://lbj.xyzonemedia.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact mt-3 flex justify-start items-center gap-4 cursor-custom nav-link"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="font-bold text-white">LBJ</div>
          </a>

          <a
            href="https://xyzmercoin.xyz" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact mt-3 flex justify-start items-center gap-4 cursor-custom nav-link"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="font-bold text-white">XYZMER Coin</div>
          </a>

          <a
            href="https://xyznt.io" 
            target="_blank"
            rel="noopener noreferrer"
            className="contact mt-3 flex justify-start items-center gap-4 cursor-custom nav-link"
          >
            <div className="w-[8px] h-[8px] bg-hover rounded-full"></div>
            <div className="font-bold text-white">XYZnt.io</div>
          </a>
        </div>

        {/* Seksi 4 */}
        <div className="foot-sec4 px-10 py-10 2xl:px-20 2xl:py-20 w-full 2xl:w-[25%] flex flex-col justify-start items-start gap-3">
          <div className="Logo text-white font-bold text-[18px] 2xl:text-[22px]">
            Online Services
          </div>
          <div className="contact text-gray-400 text-[16px] 2xl:text-[18px]">
            Let us give you the best solution
          </div>
          <button
            className="px-6 py-3 2xl:px-8 2xl:py-4 bg-hover text-white font-semibold rounded-full hover:bg-yellow-700 mt-5"
            onClick={() => window.open("https://wa.link/jkjtnj", "_blank", "noopener,noreferrer")}
          >
            Send Offers
          </button>
        </div>
      </div>

      {/* Garis Pemisah dan Copyright */}
      <div className="line w-full h-[1px] bg-gray-500 my-5"></div>
      <div className="py-5 flex justify-center items-center text-[12px] italic font-light text-white">
        <p>© Copyrights 2024 XYZ Creative Group All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
