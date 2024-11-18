"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardPillar from "@/components/card/Card-pillar"

const Pillar = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="Pillar"
      className="Our-pillar-sec w-full 2xl:h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gradient-to-b from-purple-950 to-purple-700"
    >
      <div
        data-aos="fade-left"
        className="relative top w-full flex justify-center items-center"
      >
        <div className="content flex flex-col md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
          <p className="w-full flex 2xl:justify-center 2xl:items-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
            Our Pillars
          </p>
          <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
            Uniting Vision Through
          </p>
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
            Three Strategic Pillars
          </p>

          <p className="text-white font-medium w-[80%] mt-5 2xl:text-center text-left">
            We believe in a seamless synergy that drives innovation and growth.
            Our company stands on three core pillars designed to provide
            comprehensive and dynamic solutions to our clients.
          </p>

          <CardPillar/>

        
        </div>
      </div>
    </div>
  );
};

export default Pillar;
