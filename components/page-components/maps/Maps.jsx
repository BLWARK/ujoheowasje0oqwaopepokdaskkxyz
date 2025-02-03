"use client"
import React, { useEffect } from "react";
import { FaDirections } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Maps = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, // Durasi animasi (ms)
          easing: "ease-out", // Gaya easing
          once: true, // Animasi hanya terjadi sekali
        });
      }, []);
  return (
    <div>
      {/* Embed Peta dengan Overlay */}
      <div className="w-screen flex justify-center items-center mb-10 bg-bg-gray-700 px-10 py-5 mt-10 ">
        <div className="flex flex-col 2xl:flex-row justify-center items-center gap-5 ">
          {/* Embed untuk Desktop */}
          <div data-aos="fade-right" className="relative w-full 2xl:w-[1200px] h-[500px]  2xl:block xl:hidden lg:hidden hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.000328704058!2d106.82891360901965!3d-6.19694373465085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f430b5ad3177%3A0x8c6d8178d2df06bb!2sWisma%20Aria!5e0!3m2!1sen!2sid!4v1695483212345!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Embed untuk Mobile dan Tablet */}
          <div data-aos="fade-right" className="relative w-full 2xl:w-[1200px] h-[250px] xl:w-[1200px] xl:h-[550px] lg:w-[1200px] lg:h-[550px] md:w-[1200px] md:h-[550px] 2xl:hidden xl:block lg:block block p-3">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.000328704058!2d106.82891360901965!3d-6.19694373465085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f430b5ad3177%3A0x8c6d8178d2df06bb!2sWisma%20Aria!5e0!3m2!1sen!2sid!4v1695483212345!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Keterangan */}
          <div data-aos="fade-left" className="w-full 2xl:w-1/2 text-white flex justify-start items-start flex-col text-left ml-8">
          <div className="content  flex flex-col  2xl:justify-start 2xl:items-start xl:justify-start xl:items-start justify-start items-start mt-5">
            <p className="w-full 2xl:text-left xl:text-center text-left flex 2xl:justify-start 2xl:items-start justify-start xl:justify-center xl:items-center 2xl:text-[46px] md:text-[58px] text-[26px] text-secondary font-bold ">
            Get Closer With Us
            </p>
            <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
           

            </div>
            <div className=" flex flex-col justify-start items-start gap-2">
            <h3 className="2xl:text-[24px] xl:text-[20px] lg:text-[20px] text-[16px] font-bold">Wisma Aria FI. 2 Room 204</h3>
            <p className="2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[14px]  w-[70%] ">
              JI. HOS. Cokroaminoto No.81, Menteng, Central Jakarta 10310
            </p>
            <a
            href="https://www.google.com/maps/dir/?api=1&destination=-6.19694373465085,106.82891360901965"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary cursor-custom nav-link text-white 2xl:py-4 2xl:px-8 xl:py-4 xl:px-8 lg:py-4 lg:px-8 py-4 px-6 rounded-full font-semibold hover:bg-hover transition mt-5 flex justify-center items-center gap-2 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px]">
           
            
            Get Direction
            <FaDirections className='text-[20px]' />
            </a>
            
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
