"use client"
import React, { useEffect } from "react";
import Image from 'next/image';
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
      {/* Gambar Peta dengan Overlay */}
      <div className="w-screen flex justify-center items-center mb-10 bg-bg-gray-700 px-10 py-5 mt-10 ">
        <div className="flex flex-col 2xl:flex-row justify-center items-center gap-5 ">
          {/* Gambar */}
          <div data-aos="fade-right" className="relative w-full 2xl:w-[1200px] h-[500px] 2xl:block xl:hidden lg:hidden hidden">
            <Image
              src="/MAPS2.png" // Ganti dengan URL gambar peta (atau simpan di folder public)
              alt="Map Orientation"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
              className=""
            />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center border-2 border-white ">
             
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
              <a
                // href="https://maps.app.goo.gl/jZ2RLUj6chu9Mu8J7" // Link lokasi Google Maps
                href='https://www.google.com/maps/dir/?api=1&destination=-6.19727,106.82881'
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white 2xl:py-4 2xl:px-8 xl:py-4 xl:px-8 lg:py-4 lg:px-8 py-4 px-6 font-semibold hover:bg-hover transition rounded-full cursor-custom nav-link"
              >
                See Location
              </a>
            </div>
          </div>

          <div data-aos="fade-right" className="relative w-screen 2xl:w-[1200px] h-[250px] 2xl:hidden xl:block lg:block block">
            <Image
              src="/MAPS2.png" // Ganti dengan URL gambar peta (atau simpan di folder public)
              alt="Map Orientation"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
              className=""
            />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center border-2 border-white ">
             
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition duration-300">
              <a
                // href="https://maps.app.goo.gl/jZ2RLUj6chu9Mu8J7" // Link lokasi Google Maps
                href='https://www.google.com/maps/dir/?api=1&destination=-6.19727,106.82881'
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white py-4 px-8  font-semibold hover:bg-hover transition rounded-full 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[12px]"
              >
                See Location
              </a>
            </div>
          </div>

          {/* Keterangan */}
          <div data-aos="fade-left" className="w-full 2xl:w-1/2 text-white flex justify-start items-start flex-col text-left ml-10">
          <div className="content  flex flex-col  2xl:justify-start 2xl:items-start xl:justify-center xl:items-center justify-start items-start">
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
            href="https://www.google.com/maps/dir/?api=1&destination=-6.19727,106.82881"
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
