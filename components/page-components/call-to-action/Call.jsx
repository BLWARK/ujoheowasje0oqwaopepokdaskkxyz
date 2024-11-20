"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Call = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="Call"
      className="Our-pillar-sec w-full 2xl:h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gray-900"
    >
        

      <div
        data-aos="fade-left"
        className="relative top w-full flex justify-center items-center 2xl:p-20 px-3 py-20 text-centerS"
      >
        
        <div className=" relative content flex flex-col md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
       
        <div className="w-[100px] h-[5px] bg-hover rounded-full mb-10 -mt-10"></div>
         
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center 2xl:text-center text-secondary 2xl:text-[52px] md:text-[58px] text-[32px] font-bold">
          Solve Your Business Problems with Innovative Solutions
          </p>

          <p className="text-white font-medium w-[80%] mt-5 2xl:text-center xl:text-center text-left">
          We provide tailored strategies and innovative approaches that not only solve your brand’s challenges but also enhance its potential, ensuring your project reaches new heights of success and impact.
          </p>

          
          <button
            className="px-6 py-3 2xl:px-8 2xl:py-4 bg-secondary text-white font-semibold rounded-full hover:bg-hover mt-10"
            onClick={() => window.open("https://wa.link/jkjtnj", "_blank", "noopener,noreferrer")}
          >
            Contact Us
          </button>

          

        
        </div>
      </div>
    </div>
  );
};

export default Call;
