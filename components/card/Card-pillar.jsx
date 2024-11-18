"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const CardPillar = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out",
          once: true,
        });
      }, []);
  return (
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
      <Link href="/main/event-production">
        <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
          See More <FaArrowRight />
        </button>
        </Link>
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
      <Link href="/main/legal-ip-community">
        <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
          See More <FaArrowRight />
        </button>
        </Link>
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
      <Link href="/main/event-ip-community">
        <button className="text-white bg-secondary py-4 px-6 rounded-full flex items-center gap-2 font-semibold">
          See More <FaArrowRight />
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CardPillar