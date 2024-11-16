"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi (ms)
      easing: "ease-out", // Gaya easing
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);
  return (
    <div
      id="Services"
      className="w-full 2xl:h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5  md:py-[100px] py-[20px] bg-gradient-to-b from-blue-950 to-blue-600"
    >
      <div
        data-aos="fade-left"
        className="relative top w-full  flex justify-center items-center"
      >
        <div className="content  flex flex-col  md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
          <p className="w-full flex 2xl:justify-center 2xl:items-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
            Our Services
          </p>
          <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
          <p className=" w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold ">
            Creative Solutions That Inspire
          </p>

          <p className="text-white font-medium w-[95%] mt-5 2xl:text-center text-left">
            From concept to execution, we offer a full range of creative
            services tailored to meet your business needs. Let us help you bring
            your vision to life.
          </p>

          <div className="grid gap-10 py-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center mt-10 px-5 ">
            {/* Card 1 */}
            <div
              data-aos="flip-right"
              className="relative  rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Brand.png"
                alt="Event"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Brand Communication
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    Through strategic brand communication, we ensure your voice
                    is heard, understood, and remembered, driving engagement and
                    fostering brand loyalty.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Media.png"
                alt="Media"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Media Placement
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    With our deep industry insights and strong media
                    relationships, we place your brand where it matters most,
                    ensuring optimal exposure and audience engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Media Plan.png"
                alt="Media Plan"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Media Plan
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    Whether you're launching a new product or increasing brand
                    awareness, our media plans are crafted to meet your unique
                    business objectives and drive results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Social Media M.png"
                alt="Social"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Social Media Management
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    With a deep understanding of your audience, we design and
                    manage social media campaigns that spark conversation,
                    foster community, and drive measurable results.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Content Production.png"
                alt="Content"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Content Production
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    We produce content that not only looks great but also drives
                    action. Whether it’s videos, blogs, or social media posts,
                    our content connects with your audience and achieves your
                    goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/KOL.png"
                alt="KOl"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Key Opinion Leaders
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    Leverage the influence of industry leaders to elevate your
                    brand’s message. We connect your brand with the right KOLs
                    to boost credibility and reach a wider audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Event Production.png"
                alt="Event"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Event and Production
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    Our Event and Production division brings ideas to life. From
                    conceptualization to execution, this division handles
                    everything, ensuring every event, large or small, meets the
                    highest standards and captures the intended audience's
                    imagination.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/MCN.png"
                alt="MCN"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Multi Channel Network
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    With our extensive network of digital platforms and content
                    creators, we ensure your brand’s presence is felt across
                    multiple touchpoints, driving engagement and growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/Web3.png"
                alt="Web3"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Web 3.0 Development
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    XYZ Creative Group leverages the power of Web3 to deliver
                    innovative solutions in blockchain, cryptocurrency, and
                    decentralized applications that enhance user engagement and
                    security.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 10 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/NFT LISTING.png"
                alt="NFT"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    NFT Listing
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    From art to collectibles, we guide you through the process
                    of listing your NFTs, maximizing exposure and sales
                    potential across leading platforms.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 11 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[300px] 2xl:h-[300px] w-[350px] h-[350px] transform transition duration-300 hover:scale-105 hover:shadow-cyan-400"
            >
              <img
                src="/B2B.png"
                alt="B2B"
                className="w-full h-full object-cover"
              />

              {/* Overlay and Button */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 text-secondary">
                    Business to Business
                  </h2>
                  <p className="text-white mb-4 text-[12px] font-light">
                    XYZ Creative Group specializes in providing innovative B2B
                    services that enhance operational efficiency, foster
                    partnerships, and drive business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
