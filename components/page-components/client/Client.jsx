"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Client = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, // Durasi animasi (ms)
          easing: "ease-out", // Gaya easing
          once: true, // Animasi hanya terjadi sekali
        });
      }, []);
    
      // Array of image paths
      const clientImages = [
        "/Bebelac.png",
        "/Lazada.png",
        "/Rexona.png",
        "/Grab.png",
        "/KPU.png",
        "/Ikhlas.png",
        "/BPN.png",
        "/BKPM.png",
        "/Aice.png",
        "/Kominfo.png",
        "/GBK.png",
        "/KAI.png",
        "/Vasanta.png",
        "/Bawaslu.png",
        
        "/SM.png",
        "/INDOBAROMETER.png",
        "/MPR.png",
        "/Depaul.png",
      ];
  return (
    <div id="Client" className="Our-client w-full 2xl:h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gradient-to-t from-teal-600 to-white ">
    <div data-aos="fade-left" className="relative top w-full flex justify-center items-center">
      <div className="content flex flex-col md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
        <p className="w-full flex 2xl:justify-center 2xl:items-center xl:justify-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
          Our Client
        </p>
        <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
        <p className="w-full flex 2xl:justify-center 2xl:items-center xl:justify-center xl:items-center xl:text-center  md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
          Trusted Partnerships with Leading Brands
        </p>
        <p className="text-black font-medium w-[80%] mt-5 2xl:text-center text-left">
          We are honored to partner with leading brands and emerging innovators, helping bring their visions to life. At XYZ Creative Group, our commitment to quality and creativity drives us to exceed expectations in every project.
        </p>

        {/* Client Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 2xl:grid-cols-6 xl:grid-cols-6 gap-6 mt-10 2xl:mb-0 mb-10 ">
          {clientImages.map((imageSrc, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-center 2xl:w-[200px] 2xl:h-[100px] xl:w-[150px] xl:h-[100px] w-[100px] h-[50px] backdrop-blur-2xl bg-white/40 ">
              <Image
                src={imageSrc}
                alt={`Client ${index + 1}`}
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Client