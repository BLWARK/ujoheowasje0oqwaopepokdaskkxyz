"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css';

const Project = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, // Durasi animasi (ms)
          easing: "ease-out", // Gaya easing
          once: true, // Animasi hanya terjadi sekali
        });
      }, []);
  return (
    <div className="Project-sect overflow-hidden mx-auto Our-pillar-sec  w-full 2xl:h-full flex  flex-col justify-center items-center 2xl:px-20 px-5  md:py-[100px] py-[20px] bg-gradient-to-b from-gray-950 to-gray-800 ">
      <div
          data-aos="fade-left"
          className="relative top w-full flex flex-col 2xl:justify-start 2xl:items-start xl:justify-center xl:items-center justify-start items-start"
        >
            <div className="content  flex flex-col  2xl:justify-start 2xl:items-start xl:justify-center xl:items-center justify-start items-start">
            <p className="w-full 2xl:text-left xl:text-center text-left flex 2xl:justify-start 2xl:items-start justify-start xl:justify-center xl:items-center 2xl:text-[56px] md:text-[58px] text-[36px] text-secondary font-bold 2xl:mt-10 mt-10">
            Successful Projects We’ve Delivered
            </p>
            <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
           

            </div>
           

          </div>
          <div data-aos="fade-up" className="p-6  rounded-lg shadow-lg  items-center justify-center w-[1200px] h-auto  backdrop-blur-2xl bg-transparent my-[50px] 2xl:block xl:hidden hidden">
              <Image
                src="/Project.jpg"
                alt="Project"
                width={3300}
                height={1200}
                className="object-contain"
              />
            </div>


            <div data-aos="fade-up" className="p-6  rounded-lg shadow-lg  items-center justify-center w-[1200px] h-auto  backdrop-blur-2xl bg-transparent my-[50px] 2xl:hidden xl:block hidden">
              <Image
                src="/ProjectMb.jpg"
                alt="Project"
                width={1200}
                height={1200}
                className="object-contain"
              />
            </div>

            <div data-aos="fade-up" className="p-6  rounded-lg shadow-lg items-center justify-center w-[440px] h-auto backdrop-blur-2xl bg-transparent 2xl:hidden xl:hidden block mb-20">
      <Zoom>
        <Image
          src="/ProjectMb.jpg"
          alt="Project"
          width={1200}
          height={500}
          className="object-contain"
        />
      </Zoom>
    </div>
      </div>
  )
}

export default Project