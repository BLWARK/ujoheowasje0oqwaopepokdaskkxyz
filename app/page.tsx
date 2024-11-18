"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/page-components/hero/Hero";
import About from "@/components/page-components/about-us/AboutUs";
import Pillar from "@/components/page-components/pillars/Pillar";
import Services from "@/components/page-components/services/Services";
import Client from "@/components/page-components/client/Client";
import Project from "@/components/page-components/project/Project";
import Teams from "@/components/page-components/teams/Teams";

const Page = () => {
  

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });

    // Scroll ke elemen sesuai hash URL (jika ada)
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Ambil hash tanpa tanda #
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Listener untuk perubahan hash
    window.addEventListener("hashchange", handleHashChange);

    // Panggil saat pertama kali halaman dimuat
    handleHashChange();

    // Bersihkan listener saat komponen unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-700 overflow-hidden">
      <Hero />
      <About />
      <Pillar />
      <Services />
      <Client />
      <Project />
      <Teams />
    </div>
  );
};

export default Page;
