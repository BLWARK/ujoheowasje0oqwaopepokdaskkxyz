"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });

    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) - 0.5, // Normalize x (-0.5 to 0.5)
        y: (event.clientY / window.innerHeight) - 0.5, // Normalize y (-0.5 to 0.5)
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Function to calculate combined transform with initial Tailwind translate
  const getTransformStyle = (initialX, initialY, strengthX, strengthY) => ({
    transform: `translate(${initialX + mousePosition.x * strengthX}px, ${initialY + mousePosition.y * strengthY}px)`,
  });

  return (
    <div id="home" className="Hero relative w-full h-screen md:h-screen "  >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/VD1.mp4" type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black 2xl:opacity-20 opacity-30"></div>





      {/* Floating Images with Parallax Effect */}
      {/* Desktop */}
      <div
        className="relative w-full 2xl:block xl:hidden lg:hidden md:hidden  hidden"
        style={getTransformStyle(1300, 600, 20, 20)} // Initial X: 1300px, Y: 600px
        data-aos="fade-up"
      >
        <Image
          src="/B1.png"
          alt="Hero Image"
          width={150}
          height={150}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:block xl:hidden lg:hidden md:hidden hidden"
        style={getTransformStyle(260, 50, 15, 15)} // Initial X: 260px, Y: 200px
        data-aos="fade-up"
      >
        <Image
          src="/B2.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block xl:hidden lg:hidden md:hidden hidden"
        style={getTransformStyle(260, 300, 10, 10)} // Initial X: 260px, Y: 400px
        data-aos="fade-up"
      >
        <Image
          src="/B3.png"
          alt="Hero Image"
          width={250}
          height={250}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block xl:hidden lg:hidden md:hidden hidden"
        style={getTransformStyle(1350, -300, 20, 20)} // Initial X: 1400px, Y: -200px
        data-aos="fade-up"
      >
        <Image
          src="/B4.png"
          alt="Hero Image"
          width={250}
          height={250}
          priority={true}
          className="float-animation"
        />
      </div>



      


       {/* Mobile */}
       <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(280, 500, 40, 40)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/B1.png"
          alt="Hero Image"
          width={80}
          height={80}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(20, 120, 15, 15)} // Initial X: 260px, Y: 200px
      >
        <Image
          src="/B2.png"
          alt="Hero Image"
          width={90}
          height={90}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(40, 400, 10, 10)} // Initial X: 260px, Y: 400px
      >
        <Image
          src="/B3.png"
          alt="Hero Image"
          width={120}
          height={120}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(270, -70, 5, 5)} // Initial X: 1400px, Y: -200px
      >
        <Image
          src="/B4.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>


        {/* tablet */}
        <div
        className="relative w-full 2xl:hidden xl:block lg:block md:hidden hidden "
        style={getTransformStyle(1200, 600, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/B1.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:block lg:block md:hidden hidden"
        style={getTransformStyle(160, 100, 15, 15)} // Initial X: 260px, Y: 200px
      >
        <Image
          src="/B2.png"
          alt="Hero Image"
          width={170}
          height={170}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:hidden xl:block lg:block md:hidden hidden"
        style={getTransformStyle(290, 380, 10, 10)} // Initial X: 260px, Y: 400px
      >
        <Image
          src="/B3.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:hidden xl:block lg:block md:hidden hidden"
        style={getTransformStyle(1200, -200, 20, 20)} // Initial X: 1400px, Y: -200px
      >
        <Image
          src="/B4.png"
          alt="Hero Image"
          width={160}
          height={160}
          priority={true}
          className="float-animation"
        />
      </div>



      {/* Title and CTA Button */}
<div className="title w-full px-4 md:px-20 lg:px-40 absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
  <Image
    src="/XYZ ONLY.png"
    alt="Hero Image"
    width={350}
    height={350}
    priority={true}
    className="2xl:w-[10%] xl:w-[10%] w-[30%]"
    style={{
      animation: "slide-up 1.5s ease-out forwards",
      animationDelay: "0.5s",
    }}
  />
  <h1
    className="w-full 2xl:text-[106px] text-[36px] md:text-[48px] lg:text-[54px] font-black py-4 leading-[1.2] opacity-0 text-secondary glow-text"
    style={{
      animation: "slide-up 1.5s ease-out forwards",
      animationDelay: "1.0s",
    }}
  >
    CREATIVE GROUP
  </h1>
  <p
    className="w-full 2xl:text-[32px] text-[14px] md:text-[16px] font-medium text-white opacity-0"
    style={{
      animation: "slide-up 1.5s ease-out forwards",
      animationDelay: "1.5s",
    }}
  >
    PT Bisnis Ekosistem Kreatif Indonesia
  </p>

  {/* Kotak Gambar */}
  <div className="flex 2xl:flex-row flex-col justify-center items-center 2xl:gap-10 gap-5 mt-10 opacity-0" 
    style={{
      animation: "slide-up 1.5s ease-out forwards",
      animationDelay: "2.0s",
    }}
  >
    {/* Kotak 1 */}
    <a
      href="https://xyzonemedia.com" // Ganti dengan URL Anda
      target="_blank"
      rel="noopener noreferrer"
      className="relative  w-[170px] h-[55px] md:w-[200px] md:h-[55px] lg:w-[250px] lg:h-[55px] xl:w-[200px] xl:h-[75px] 2xl:w-[200px] 2xl:h-[75px]] border-2 border-cyan-400 bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-xl overflow-hidden hover:scale-105 transition transform duration-300 cursor-custom nav-link"
    >
      <Image
        src="/xyzone.png" // Ganti dengan gambar Anda
        alt="Kotak 1"
        fill
        className="object-contain px-10"
      />
    </a>

    {/* Kotak 2 */}
    <a
      href="https://lbj.xyzonemedia.com/" // Ganti dengan URL Anda
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[170px] h-[55px] md:w-[200px] md:h-[55px] lg:w-[250px] lg:h-[55px] xl:w-[200px] xl:h-[75px] 2xl:w-[200px] 2xl:h-[75px] border-2 border-cyan-400  bg-gradient-to-bl from-cyan-200 to-cyan-600 rounded-xl overflow-hidden hover:scale-105 transition transform duration-300 cursor-custom nav-link"
    >
      <Image
        src="/LBJ.png" // Ganti dengan gambar Anda
        alt="Kotak 2"
        fill
        className="object-contain"
      />
    </a>
  </div>
</div>

    </div>
  );
};

export default Hero;
