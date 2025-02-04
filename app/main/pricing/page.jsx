"use client";
import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { packages, discounts } from "@/data/dataPackage"; // Pastikan path sesuai dengan lokasi file

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  useEffect(() => {
    AOS.init({
      duration: 7000, // Turunkan ke durasi yang lebih realistis
      easing: "ease-out",
      once: true, // Animasi hanya terjadi sekali
      
    });

    // Re-initialize ketika komponen dirender ulang (untuk SSR)
    AOS.refresh();
  }, []);
  return (
    <div className="2xl:p-6 2xl:px-20 p-4 bg-gray-750 mt-28 mb-20 ">
      <div data-aos="fade-up" data-aos-duration="5000" className="flex flex-col 2xl:justify-center justify-start 2xl:items-center items-start">
        <h1 className="2xl:text-5xl text-3xl font-bold 2xl:text-center text-left mb-4 text-secondary">
          BEKI PACKAGES 2025
        </h1>
        <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
        <p className="2xl:text-center text-left text-gray-300 mb-8 2xl:w-[70%] w-full 2xl:text-xl text-small">
          PT Bisnis Ekosistem Kreatif Indonesia, through XYZONE Media, presents
          integrated marketing packages designed to help your business thrive in
          the digital era. These packages are tailored to expand reach, enhance
          branding, and increase engagement.
        </p>
      </div>

      {/* Billing Toggle */}
      <div data-aos="fade-up" className="flex 2xl:justify-center justify-start overflow-auto mb-8">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-2 mx-2 ${
            billingCycle === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-400"
          } rounded`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("semiAnnual")}
          className={`px-4 py-2 mx-2 ${
            billingCycle === "semiAnnual"
              ? "bg-blue-500 text-white"
              : "bg-gray-400"
          } rounded`}
        >
          6 Months
        </button>
        <button
          onClick={() => setBillingCycle("annual")}
          className={`px-4 py-2 mx-2 ${
            billingCycle === "annual" ? "bg-blue-500 text-white" : "bg-gray-400"
          } rounded`}
        >
          12 Months
        </button>
      </div>

      {/* Pricing Grid */}
      <div  className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
          data-aos="flip-left"
          data-aos-duration="5000"
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              pkg.cardColor
            } flex flex-col justify-between h-full   ${
              pkg.highlight ? "border-4 border-hover scale-100" : ""
            }`}
          >
            <div>
              <div  className="flex justify-between items-center mb-4">
                <h2 className="2xl:text-2xl text-2xl font-bold text-black">
                  {pkg.name}
                </h2>
                {pkg.highlight && (
                  <span className="bg-red-500 text-white 2xl:px-2 px-2 animate-pulse py-2 rounded text-sm">
                    Best Value
                  </span>
                )}
              </div>
              <p className="text-3xl font-bold text-hover flex items-center gap-2">
                {pkg.prices[billingCycle]}
                {billingCycle !== "monthly" && (
                  <span className="text-red-500 text-sm">
                    (Save{" "}
                    {billingCycle === "semiAnnual"
                      ? discounts[pkg.name].semiAnnual
                      : discounts[pkg.name].annual}
                    %)
                  </span>
                )}
              </p>
              <div className="w-full h-[1px] bg-gray-400 opacity-80 my-10"></div>
              {pkg.features.map((feature, i) => (
                <div key={i} className="mb-4 gap-4">
                  <h3 className="font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center text-gray-950 text-sm px-2"
                      >
                        <FaCheck className="text-green-500 mr-2 text-lg" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="w-full h-[1px] bg-gray-400 my-10"></div>
              <p className="text-red-500 text-xs font-semibold italic mb-2">
                {pkg.totalReach}
              </p>
              <p className="text-red-500 text-xs font-semibold italic mb-2">
                {pkg.totalFollowers}
              </p>

              {/* Contact Us Button */}
              <a
                href="https://wa.me/6281295095096"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-10">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
