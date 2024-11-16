"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi (ms)
      easing: "ease-out", // Gaya easing
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);

  const cards = [
    {
      img: "/1.jpg",
      title: "Brand Communication",
      description:
        "Through strategic brand communication, we ensure your voice is heard, understood, and remembered, driving engagement and fostering brand loyalty.",
    },
    {
      img: "/2.jpg",
      title: "Media Placement",
      description:
        "With our deep industry insights and strong media relationships, we place your brand where it matters most, ensuring optimal exposure and audience engagement.",
    },
    {
      img: "/3.jpg",
      title: "Media Plan",
      description:
        "Whether you're launching a new product or increasing brand awareness, our media plans are crafted to meet your unique business objectives and drive results.",
    },
    {
      img: "/4.jpg",
      title: "Social Media Management",
      description:
        "With a deep understanding of your audience, we design and manage social media campaigns that spark conversation, foster community, and drive measurable results.",
    },
    {
      img: "/5.jpg",
      title: "Content Production",
      description:
        "We produce content that not only looks great but also drives action. Whether it’s videos, blogs, or social media posts, our content connects with your audience and achieves your goals.",
    },
    {
      img: "/6.jpg",
      title: "Key Opinion Leaders",
      description:
        "Leverage the influence of industry leaders to elevate your brand’s message. We connect your brand with the right KOLs to boost credibility and reach a wider audience.",
    },
    {
      img: "/7.jpg",
      title: "Event and Production",
      description:
        "Our Event and Production division brings ideas to life. From conceptualization to execution, this division handles everything, ensuring every event, large or small, meets the highest standards and captures the intended audience's imagination.",
    },
    {
      img: "/8.jpg",
      title: "Multi Channel Network",
      description:
        "With our extensive network of digital platforms and content creators, we ensure your brand’s presence is felt across multiple touchpoints, driving engagement and growth.",
    },
    {
      img: "/9.jpg",
      title: "Web 3.0 Development",
      description:
        "XYZ Creative Group leverages the power of Web3 to deliver innovative solutions in blockchain, cryptocurrency, and decentralized applications that enhance user engagement and security.",
    },
    {
      img: "/10.jpg",
      title: "NFT Listing",
      description:
        "From art to collectibles, we guide you through the process of listing your NFTs, maximizing exposure and sales potential across leading platforms.",
    },
    {
      img: "/11.jpg",
      title: "Business to Business",
      description:
        "XYZ Creative Group specializes in providing innovative B2B services that enhance operational efficiency, foster partnerships, and drive business growth.",
    },
  ];

  return (
    <div
      id="Services"
      className="w-full 2xl:h-full flex flex-col justify-center items-center 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gradient-to-b from-blue-950 to-blue-600"
    >
      <div
        data-aos="fade-left"
        className="relative w-full flex justify-center items-center"
      >
        <div className="content flex flex-col md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
          <p className="w-full flex 2xl:justify-center 2xl:items-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
            Our Services
          </p>
          <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
            Creative Solutions That Inspire
          </p>

          <p className="text-white font-medium w-[95%] mt-5 2xl:text-center text-left">
            From concept to execution, we offer a full range of creative
            services tailored to meet your business needs. Let us help you bring
            your vision to life.
          </p>

          <div className="grid gap-10 py-10 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 justify-items-center mt-10 px-5">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="flip-right"
                className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[150px] h-[150px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={350}
                  height={350}
                  className="w-full h-full object-cover"
                />
                <div className="absolute 2xl:bottom-9 bottom-3 justtify-center items-center w-full text-center px-4">
      <h3 className="text-white w-full text-[12px] md:text-xl lg:text-[22px] font-bold ">
        {card.title}
      </h3>
    </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <div className="p-5">
                    <h2 className="text-xl font-bold mb-2 text-secondary">
                      {card.title}
                    </h2>
                    <p className="text-white mb-4 text-[12px] font-light">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
