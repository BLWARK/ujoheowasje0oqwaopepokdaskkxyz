"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        AOS.init({
          duration: 700, // Durasi animasi (ms)
          easing: "ease-out", // Gaya easing
          once: true, // Animasi hanya terjadi sekali
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

      const getTransformStyle = (initialX, initialY, strengthX, strengthY) => ({
        transform: `translate(${initialX + mousePosition.x * strengthX}px, ${initialY + mousePosition.y * strengthY}px)`,
      });
      
  return (
    <div id="About" className=" about-us-sect w-full 2xl:h-[1000px] flex 2xl:flex-row xl:flex-col lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5 2xl:py-[20px] md:py-[100px] py-[100px] bg-gradient-to-b from-blue-950 to-blue-600 ">
    {/* <Image
        src="/Grid1.png"
        alt="Hero Image"
        width={1920}
        height={500}
        className="object-cover absolute 2xl:block hidden" // Gunakan CSS untuk object-fit
        priority={true}
      /> */}
       {/* <Image
        src="/Grid1.png"
        alt="Hero Image"
        width={320}
        height={1080}
        className="object-cover absolute 2xl:hidden block" // Gunakan CSS untuk object-fit
        priority={true}
      /> */}
      
      <div data-aos="fade-right" className="left w-full 2xl:w-1/2 xl:w-full lg:w-full md:w-full flex 2xl:flex-col flex-row  justify-center items-center 2xl:mt-[590px] mt-10 ">
      <Image
        src="/AboutUs.png"
        alt="Hero Image"
        width={650}
        height={650}
        priority={true}
        className="object-cover" // Gunakan CSS untuk object-fit
        />
          <div
        className=" relative w-full 2xl:block  hidden"
        style={getTransformStyle(150, -100, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation "
        />
      </div>
        <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(100, -80, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(600, -190, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cylinder-lg.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(300, -800, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Pentagon1.png"
          alt="Hero Image"
          width={200}
          height={200}
          priority={true}
          className="float-animation z-0"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(80, -800, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Ball-Blue2.png"
          alt="Hero Image"
          width={80}
          height={80}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="relative w-full 2xl:block hidden"
        style={getTransformStyle(700, -1000, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Circle1.png"
          alt="Hero Image"
          width={80}
          height={80}
          priority={true}
          className="float-animation"
        />
      </div>

      {/* Mobile */}
      <div
       
       className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
       style={getTransformStyle(270, 700, 20, 20)} // Initial X: 1300px, Y: 600px
     >
       <Image
         src="/Idea.png"
         alt="Hero Image"
         width={200}
         height={200}
         priority={true}
         className="float-animation "
          
       />
     </div>
      
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(300, -150, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Circle1.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(240, 150, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cylinder-lg.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(100, -140, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Pentagon1.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation z-0"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(0, -100, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Ball-Blue2.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle(20, 100, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={30}
          height={30}
          priority={true}
          className="float-animation "
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:hidden lg:hidden md:hidden block"
        style={getTransformStyle( 0, 150, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation "
        />
      </div>
      



       {/* tabletxl */}
       <div
       
       className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
       style={getTransformStyle(970, -350, 20, 20)} // Initial X: 1300px, Y: 600px
     >
       <Image
         src="/Idea.png"
         alt="Hero Image"
         width={300}
         height={300}
         priority={true}
         className="float-animation "
          
       />
     </div>
      
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle(900, -240, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Circle1.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle(840, 230, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cylinder-lg.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle(550, -230, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Pentagon1.png"
          alt="Hero Image"
          width={100}
          height={100}
          priority={true}
          className="float-animation z-0"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle(300, -100, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Ball-Blue2.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation"
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle(350, 200, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={30}
          height={30}
          priority={true}
          className="float-animation "
        />
      </div>
      <div
        className="absolute w-full 2xl:hidden xl:block lg:hidden md:hidden hidden"
        style={getTransformStyle( 300, 230, 20, 20)} // Initial X: 1300px, Y: 600px
      >
        <Image
          src="/Cube1.png"
          alt="Hero Image"
          width={50}
          height={50}
          priority={true}
          className="float-animation "
        />
      </div>
      
      </div>
      <div data-aos="fade-left" className="relative right w-full 2xl:w-1/2 xl:w-full lg:w-full md:w-full flex 2xl:justify-end 2xl:items-end 2xl:-mt-20">
      <div className="content  flex flex-col xl:justify-center xl:items-center  md:justify-center md:items-center 2xl:justify-start 2xl:items-start">
      <div
       
       className="absolute w-full 2xl:block xl:hidden lg:hidden md:hidden hideen "
       style={getTransformStyle(500, -200, 20, 20)} // Initial X: 1300px, Y: 600px
     >
       <Image
         src="/Idea.png"
         alt="Hero Image"
         width={330}
         height={330}
         priority={true}
         className="float-animation "
         
       />
     </div>
     
      <p className=" 2xl:text-[28px] text-[20px] flex 2xl:justify-start 2xl:items-start xl:justify-center xl:items-center justify-start items-start text-secondary font-bold w-[80%] 2xl:mt-10 mt-20">
            About Us
          </p>
      <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
          <p className=" 2xl:w-[70%] xl:w-full lg:w-full md:w-full w-full flex 2xl:justify-start 2xl:items-start md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold ">We are XYZ</p>
          <p className=" 2xl:w-[70%] xl:w-full lg:w-full md:w-full w-full flex 2xl:justify-start 2xl:items-start md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold ">Creative Group</p>
          
          <p className="text-white font-medium w-[80%] mt-5 flex 2xl:justify-start 2xl:items-start 2xl:text-start xl:justify-center xl:items-center xl:text-center justify-start items-start text-start">
            PT. Bisnis Ekosistem Kreatif Indonesia is a fast growing
            integrated creative Ecosystem company. Leveraging on its strategic
            position and expertise it aims to become a leading player in the
            upcoming 3 years.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs