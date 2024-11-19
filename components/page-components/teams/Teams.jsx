"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSwipeable } from "react-swipeable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const leaders = [
    {
      name: "Jimmy Lizardo",
      title: "Chief Executive Officer",
      description:
        "Practitioner & consultant for Media Industry for more than 20 years, Jimmy received his PhD specializing in Media Industry",
      imageLarge: "/JL.png",
      imageSmall: "/JL.png",
    },
    {
      name: "Ricky Nehemia Adam",
      title: "Chief Marketing Officer",
      description:
        "Ricky started his career at Broadcasting Media Indonesia (FTA). He joined Indonesia's biggest media television company at this time, MNC Media. After his career at MNC, Ricky continued his career at VIVA Group Media (ANTV & TVONE) as the GM of Digital Media, handling all digital ecosystems and also building an OTT platform for VIVA Group Media (VIA HUB). He also gained experience in the field of sports content by creating and building the Lensa Olahraga Program. Moreover, he is also Head of Digital for one of the biggest football clubs in Indonesia, Persija Jakarta.",
      imageLarge: "/Ricky.png",
      imageSmall: "/Ricky.png",
    },
    {
      name: "Pandu Bagaskoro",
      title: "Chief Operation Officer",
      description:
        "Pandu is a passionate marketing communication professional with more than 20 years of experience, starting from multinational advertising agencies such as Fortune Indonesia DDB, Publicis Inovasian, and the biggest local advertising agency in Indonesia, MatariAdvertising. He also joined The Coca-Cola Company Indonesia, handling the media planning and execution of all Coca-Cola brands in Indonesia.",
      imageLarge: "/PD.png",
      imageSmall: "/PD.png",
    },
  ];

const Teams = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: "ease-out",
          once: true,
        });
      }, []);
    
      const [selectedIndex, setSelectedIndex] = useState(0);
      const [isAnimating, setIsAnimating] = useState(false); // State untuk mengelola animasi keluar
      const selectedLeader = leaders[selectedIndex];
    
      const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedIndex((prevIndex) =>
            prevIndex === 0 ? leaders.length - 1 : prevIndex - 1
          );
          setIsAnimating(false);
        }, 500); // Sinkronkan waktu dengan durasi animasi keluar
      };
    
      const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedIndex((prevIndex) =>
            prevIndex === leaders.length - 1 ? 0 : prevIndex + 1
          );
          setIsAnimating(false);
        }, 500); // Sinkronkan waktu dengan durasi animasi keluar
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);
        return () => clearInterval(interval);
      }, [selectedIndex]);
    
      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
      });
  return (
    <div
    {...swipeHandlers}
    id="Teams"
    data-aos="fade-up"
    className="Leaders Our-pillar-sec w-full 2xl:h-full flex flex-col 2xl:justify-center 2xl:items-center xl:justify-center xl:items-center justify-start items-start 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gray-700"
  >
    <p className="w-full flex 2xl:justify-center 2xl:items-center xl:justify-center xl:items-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
      Meet Our Visionary Leaders
    </p>
    <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
    <p className="w-full flex 2xl:justify-center 2xl:items-center 2xl:text-center xl:justify-center xl:items-center xl:text-center md:justify-center md:items-center md:text-center text-start text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
      Uniting Vision Through
    </p>
    <p className="w-full flex 2xl:justify-center 2xl:items-center 2xl:text-center xl:justify-center xl:items-center xl:text-center md:justify-center md:items-center md:text-center text-start justify-start items-start text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
      Driven by Leadership, Inspired by Creativity
    </p>

    <p className="text-white font-medium 2xl:w-[80%] w-[95%] mt-5 2xl:justify-center 2xl:items-center 2xl:text-center xl:justify-center xl:items-center xl:text-center md:justify-center md:items-center md:text-center text-start">
      At the helm of XYZ Creative Group, our directors bring expertise,
      innovation, and strategic vision, ensuring every project delivers
      excellence and exceeds expectations.
    </p>

    {/* Konten Besar dengan Panah Navigasi */}
    <div data-aos="fade-up" className="content flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col items-center gap-8 w-full rounded-lg 2xl:p-10 px-2 py-10 relative">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 2xl:block xl:block hidden 2xl:bg-secondary xl:bg-transparent 2xl:text-white xl:text-secondary rounded-full hover:bg-hover transition"
      >
        <FaArrowLeft size={24} />
      </button>

      <div data-aos="fade-left" data-aos-duration="1000" className={`left w-full 2xl:w-1/2 flex justify-center items-center pl-10 ${isAnimating ? "fade-out-animation" : "fade-in-animation"}`}>
        <Image
          src={selectedLeader.imageLarge}
          alt={selectedLeader.name}
          width={500}
          height={600}
          className="object-cover rounded-lg"
        />
      </div>
      <div
      data-aos="fade-left" data-aos-duration="1000"
        key={selectedLeader.name}
        className={`right w-full 2xl:w-1/2 flex flex-col justify-start items-start 2xl:p-5 p-0 2xl:gap-5 gap-2 text-secondary ${isAnimating ? "fade-out-animation" : "fade-in-animation"}`}
      >
        <h2 data-aos="fade-left" data-aos-duration="1000" className="text-2xl font-bold 2xl:text-[56px] xl:text-[46px] md:text-[58px] text-[36px]">
          {selectedLeader.name}
        </h2>
        <h3 data-aos="fade-left" data-aos-duration="1000" className="text-lg font-light 2xl:text-[28px] xl:text-[26px] md:text-[58px] text-[36px] text-secondary 2xl:py-0 py-0 xl:py-5">
          {selectedLeader.title}
        </h3>
        <p data-aos="fade-left" data-aos-duration="1000" className="mt-2 font-light text-white">
          {selectedLeader.description}
        </p>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 2xl:block xl:block hidden 2xl:bg-secondary xl:bg-transparent 2xl:text-white xl:text-secondary rounded-full  hover:bg-hover transition"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  </div>
  )
}

export default Teams