"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Pillar = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="Pillar"
      className="Our-pillar-sec w-full 2xl:h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-center items-center 2xl:px-20 px-5 md:py-[100px] py-[20px] bg-gradient-to-b from-purple-950 to-purple-700"
    >
      <div
        data-aos="fade-left"
        className="relative top w-full flex justify-center items-center"
      >
        <div className="content flex flex-col md:justify-center md:items-center 2xl:justify-center 2xl:items-center justify-start items-start">
          <p className="w-full flex 2xl:justify-center 2xl:items-center justify-start items-start 2xl:text-[28px] text-[20px] text-secondary font-bold 2xl:mt-10 mt-10">
            Our Pillars
          </p>
          <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
            Uniting Vision Through
          </p>
          <p className="w-full flex 2xl:justify-center 2xl:items-center md:justify-center md:items-center text-secondary 2xl:text-[56px] md:text-[58px] text-[36px] font-bold">
            Three Strategic Pillars
          </p>

          <p className="text-white font-medium w-[80%] mt-5 2xl:text-center text-left">
            We believe in a seamless synergy that drives innovation and growth.
            Our company stands on three core pillars designed to provide
            comprehensive and dynamic solutions to our clients.
          </p>

          <div className="grid gap-10 py-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center mt-10 px-5">
            {/* Card 1 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[400px] w-[350px] h-[500px] transform transition duration-300 hover:scale-105 hover:shadow-purple-300/80"
            >
              <Image
                src="/Event.jpg"
                alt="Event"
                width={400}
                height={300}
                className="object-cover w-full h-[300px]"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-secondary">
                  Event and Production
                </h2>
                <p className="text-white mb-4 text-[12px] font-light">
                  Our Event and Production division brings ideas to life. From
                  conceptualization to execution, this division handles
                  everything, ensuring every event, large or small, meets the
                  highest standards and captures the intended audience&#39;s
                  imagination.
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
                  See More <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="flip-left"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[400px] w-[350px] h-[500px] transform transition duration-300 hover:scale-105 hover:shadow-purple-300/80"
            >
              <Image
                src="/Legal.jpg"
                alt="Legal"
                width={400}
                height={300}
                className="object-cover w-full h-[300px]"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-secondary">
                  Legal, IP and Community
                </h2>
                <p className="text-white mb-4 text-[12px] font-light">
                  We prioritize protecting ideas and fostering collaboration.
                  Our Legal, IP, and Community division provides essential
                  services to safeguard intellectual property, strengthen legal
                  frameworks, and build vibrant communities that connect brands
                  and their audiences effectively.
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
                  See More <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="flip-right"
              className="relative bg-gradient-to-tr from-purple-950 to-purple-400 rounded-3xl shadow-lg overflow-hidden 2xl:w-[400px] w-[350px] h-[500px] transform transition duration-300 hover:scale-105 hover:shadow-purple-300/80"
            >
              <Image
                src="/Digital.jpg"
                alt="Digital Media Marketing"
                width={400}
                height={300}
                className="object-cover w-full h-[300px]"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-secondary">
                  Digital Media Marketing
                </h2>
                <p className="text-white mb-4 text-[12px] font-light">
                  Our Digital Media Marketing division is at the forefront of
                  the digital space. We drive impactful campaigns that engage,
                  inspire, and grow audiences across digital platforms.
                </p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
                  See More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillar;
