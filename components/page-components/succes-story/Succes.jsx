"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Success = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Durasi animasi (ms)
      easing: "ease-out", // Gaya easing
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div
      
      className="Success-sect overflow-hidden w-full h-full flex flex-col justify-start items-center px-5 md:px-20 py-10 bg-gradient-to-b from-gray-950 to-gray-800"
    >
      {/* Section Title */}
      <div data-aos="fade-up" className="content flex flex-col justify-center items-center mb-10">
        <p className="text-center text-[36px] md:text-[58px] text-secondary font-bold mt-10">
          Our Success Story
        </p>
        <div className="w-[100px] h-[5px] bg-hover rounded-full 2xl:my-5 my-3"></div>
      </div>

      {/* Video Section */}
      <div data-aos="fade-up" className="relative w-full 2xl:max-w-10xl 2xl:p-20  mb-10">
        <video
          src="/SuccesVD1.mp4"
          controls
          autoPlay
          loop
          muted
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Success;
