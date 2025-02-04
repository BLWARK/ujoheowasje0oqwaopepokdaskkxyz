"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";

import Hero from "@/components/page-components/hero/Hero";
import About from "@/components/page-components/about-us/AboutUs";
import Pillar from "@/components/page-components/pillars/Pillar";
import Services from "@/components/page-components/services/Services";
import Client from "@/components/page-components/client/Client";
import Project from "@/components/page-components/project/Project";
import Teams from "@/components/page-components/teams/Teams";
import Call from "@/components/page-components/call-to-action/Call";
import Success from "@/components/page-components/succes-story/Succes";
import Maps from "@/components/page-components/maps/Maps";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });

    const handlePageLoad = () => {
      setTimeout(() => {
        setIsOpen(true); // Buka tirai
        setTimeout(() => setIsLoading(false), 1500); // Sembunyikan loading setelah animasi
      }, 500);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`loading-overlay ${isOpen ? "hiddens" : ""}`}>
          <div className="loading-content">
            <Image
              src="/loading.gif"
              alt="Loading..."
              className="loading-gif"
              width={300}
              height={300}
            />
           
          </div>
        </div>
      )}

      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-700 overflow-hidden">
        <Hero />
        <About />
        <Pillar />
        <Services />
        <Teams />
        <Client />
        <Project />
        <Success />
        <Call />
        <Maps />
      </div>
    </>
  );
};

export default Page;
