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
    <div id="home" className="Hero relative w-full h-screen md:h-[1000px]" data-aos="fade-up">
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
      <div className="absolute inset-0 bg-black opacity-30"></div>





      {/* Floating Images with Parallax Effect */}
      {/* Desktop */}
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(1300, 600, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/A1.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(260, 200, 15, 15)} // Initial X: 260px, Y: 200px
      >
        <Image
          src="/A2.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(260, 400, 10, 10)} // Initial X: 260px, Y: 400px
      >
        <Image
          src="/A3.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(1400, -200, 20, 20)} // Initial X: 1400px, Y: -200px
      >
        <Image
          src="/A4.png"
          alt="Hero Image"
          width={90}
          height={90}
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
          src="/A1.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(20, 200, 15, 15)} // Initial X: 260px, Y: 200px
      >
        <Image
          src="/A2.png"
          alt="Hero Image"
          width={90}
          height={90}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(40, 420, 10, 10)} // Initial X: 260px, Y: 400px
      >
        <Image
          src="/A3.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(270, 70, 5, 5)} // Initial X: 1400px, Y: -200px
      >
        <Image
          src="/A4.png"
          alt="Hero Image"
          width={70}
          height={70}
          priority={true}
          className="float-animation"
        />
      </div>


        {/* tablet */}
        <div
        className="relative w-full 2xl:hidden md:block hidden "
        style={getTransformStyle(700, 600, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/A1.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>

      <div
        className="relative w-full 2xl:hidden md:block hidden"
        style={getTransformStyle(60, 200, 15, 15)} // Initial X: 260px, Y: 200px
      >
        <Image
          src="/A2.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:hidden md:block hidden"
        style={getTransformStyle(160, 380, 10, 10)} // Initial X: 260px, Y: 400px
      >
        <Image
          src="/A3.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:hidden md:block  hidden"
        style={getTransformStyle(700, -170, 20, 20)} // Initial X: 1400px, Y: -200px
      >
        <Image
          src="/A4.png"
          alt="Hero Image"
          width={90}
          height={90}
          priority={true}
          className="float-animation"
        />
      </div>



      {/* Title and CTA Button */}
      <div className="title w-full px-4 md:px-20 lg:px-40 absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <Image
          src="/xyz-logo.png"
          alt="Hero Image"
          width={300}
          height={300}
          priority={true}
          className="2xl:w-[20%] w-[50%]"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "0.5s",
          }}
        />
        <h1
          className="w-full 2xl:text-[96px] text-[32px] md:text-[48px] lg:text-[54px] font-black py-4 leading-[1.2] opacity-0 text-secondary glow-text"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "1.0s",
          }}
        >
          XYZ CREATIVE GROUP
        </h1>
        <p
          className="w-full 2xl:text-[38px] text-[14px] md:text-[16px] font-medium text-white opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "1.5s",
          }}
        >
          PT Bisnis Ekosistem Kreatif Indonesia
        </p>
        <div className="button flex 2xl:flex-row flex-col justify-center items-center 2xl:gap-10 gap-3 2xl:mt-0 mt-5">
        <a
          href="https://wa.link/jkjtnj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-white font-semibold rounded-full hover:bg-hover transition duration-300 mt-5 md:mt-10 opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "2.0s",
          }}
        >
          Contact us
        </a>
        {/* <a
          href="https://wa.me/your_number"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 md:px-8 md:py-4 border-2 border-secondary text-white font-semibold rounded-full hover:bg-hover transition duration-300 mt-5 md:mt-10 opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "2.0s",
          }}
        >
          Our Services
        </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
