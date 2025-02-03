"use client"
import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    AOS.init({
      duration: 7000, // Durasi animasi (ms)
      easing: "ease-out", // Gaya easing
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);

  // Diskon yang dihitung manual
  const discounts = {
    "Silver BroadReach": { semiAnnual: 5.3, annual: 11.74 },
    "Gold OmniReach": { semiAnnual: 7.92, annual: 13.96 },
    "Platinum OmniMax": { semiAnnual: 5.95, annual: 11.9 },
    "Diamond ImpactReach": { semiAnnual: 7.35, annual: 13.24 }
  };

  const packages = [
    {
      name: 'Silver BroadReach',
      highlight: false,
      cardColor: 'bg-gradient-to-br from-white to-cyan-400',
      prices: {
        monthly: 'Rp 11,000,000',
        semiAnnual: 'Rp 62,500,000',
        annual: 'Rp 116,500,000',
      },
      originalPrice: 'Rp 18,000,000/month',
      totalReach: 'Total Reach: 2,000,000 - 3,500,000/month',
      totalFollowers: 'Total Followers: 500 - 1,500 followers/month',
      features: [
        {
          title: 'PORTAL',
          items: ['Giant Banner (Desktop) + Under Artikel Banner (Mobile)']
        },
        {
          title: 'XYZONE TV',
          items: ['Ad Libs 3x + Super Impose 3x + Product Placement + Product Usage']
        }
      ]
    },
    {
      name: 'Gold OmniReach',
      highlight: false,
      cardColor: 'bg-gradient-to-br from-white to-cyan-400',
      prices: {
        monthly: 'Rp 20,000,000',
        semiAnnual: 'Rp 110,500,000',
        annual: 'Rp 206,500,000',
      },
      originalPrice: 'Rp 39,522,200/month',
      totalReach: 'Total Reach: 2,500,000 - 8,000,000/month',
      totalFollowers: 'Total Followers: 1,500 - 3,500 followers/month',
      features: [
        {
          title: 'MEDIA SOSIAL XYZONE',
          items: ['1 Feed Post + 1 Story di dua akun (XYZONEMEDIA & LBJ)']
        },
        {
          title: 'XYZONE TV',
          items: ['Ad Libs 5x + Super Impose 5x + Product Placement']
        },
        {
          title: 'PORTAL',
          items: ['Giant Banner (Desktop) + Bottom Banner (Mobile)']
        }
      ]
    },
    {
      name: 'Platinum OmniMax',
      highlight: true,
      cardColor: 'bg-gradient-to-br from-white to-cyan-400',
      prices: {
        monthly: 'Rp 28,000,000',
        semiAnnual: 'Rp 158,000,000',
        annual: 'Rp 296,000,000',
      },
      originalPrice: 'Rp 48,499,960/month',
      totalReach: 'Total Reach: 4,000,000 - 8,000,000/month',
      totalFollowers: 'Total Followers: 3,000 - 7,000 followers/month',
      features: [
        {
          title: 'SOSIAL MEDIA MANAGEMENT',
          items: [
            'Posting Instagram (Feed 20x, Story 70x, Reels 10x)',
            'Posting Twitter 10x',
            'Posting Tiktok 10x',
            'Pengelolaan interaksi dengan audiens (Komentar)',
            'Laporan kinerja bulanan (KPI : Reach & Followers)',
            '2 iklan berbayar (ads) per bulan',
            '500 digital army per bulan',
            'Penyesuaian konten dengan tren terbaru'
          ]
        },
        {
          title: 'XYZONE TV',
          items: ['Ad Libs 5x + Super Impose 5x + Product Placement + Product Usage']
        },
        {
          title: 'PORTAL',
          items: ['Top Banner (Desktop) + Rectangle Banner (Mobile)']
        }
      ]
    },
    {
      name: 'Diamond ImpactReach',
      highlight: false,
      cardColor: 'bg-gradient-to-br from-white to-cyan-400',
      prices: {
        monthly: 'Rp 51,000,000',
        semiAnnual: 'Rp 283,500,000',
        annual: 'Rp 531,000,000',
      },
      originalPrice: 'Rp 87,891,600/month',
      totalReach: 'Total Reach: 5,000,000 - 10,000,000 /month',
      totalFollowers: 'Total Followers: 4,000 - 10,000 followers/month',
      features: [
        {
          title: 'SOSIAL MEDIA MANAGEMENT',
          items: [
            'Posting Instagram (Feed 25x, Story 90x, Reels 15x)',
            'Posting Twitter 20x',
            'Posting Tiktok 15x',
            'Pengelolaan interaksi dengan audiens (Komentar)',
            'Laporan kinerja bulanan (KPI : Reach & Followers)',
            '500 digital army per bulan',
            'Laporan kinerja bulanan dengan analisis mendalam dan rekomendasi',
            '3 iklan berbayar (ads) per bulan',
            `Penyesuaian konten dengan tren terkini dan konten yang lebih kreatif ${billingCycle !== 'monthly' ? ' - Eksklusif' : ''}`,
            `${billingCycle === 'annual' ? 'Optimalisasi hashtag dan caption SEO untuk engagement maksimal - Eksklusif' : ''}`,
            'Dapat landing page website brand (domain dan server exclude)'
          ].filter(Boolean)
        },
        {
          title: 'XYZONE TV',
          items: ['Ad Libs 7x + Super Impose 7x + Product Placement + Product Usage']
        },
        {
          title: 'PORTAL',
          items: ['Top Banner (Desktop) + Rectangle Banner (Mobile)']
        },
        {
          title: 'MEDIA SOSIAL XYZONE',
          items: ['1 Feed Post + 1 Story + 1 Reel di dua akun']
        }
      ]
    }
  ];

  return (
    <div className="2xl:p-6 2xl:px-20 p-4 bg-gray-750 mt-20 ">
      <div className="flex flex-col 2xl:justify-center justify-start 2xl:items-center items-start">
        <h1 className="2xl:text-5xl text-3xl font-bold 2xl:text-center text-left mb-4 text-secondary">BEKI PACKAGE 2025</h1>
        <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
        <p className="2xl:text-center text-left text-gray-300 mb-8 2xl:w-[70%] w-full 2xl:text-xl text-small ">
          PT Bisnis Ekosistem Kreatif Indonesia melalui XYZONE Media menghadirkan paket pemasaran terintegrasi 
          untuk mendukung pertumbuhan bisnis di era digital. Paket ini dirancang untuk meningkatkan jangkauan, 
          memperkuat branding, dan meningkatkan engagement.
        </p>
      </div>
      {/* Billing Toggle */}
      <div className="flex 2xl:justify-center justify-start overflow-auto mb-8">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-4 py-2 mx-2 ${billingCycle === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-400'} rounded`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('semiAnnual')}
          className={`px-4 py-2 mx-2 ${billingCycle === 'semiAnnual' ? 'bg-blue-500 text-white' : 'bg-gray-400'} rounded`}
        >
          6 Months
        </button>
        <button
          onClick={() => setBillingCycle('annual')}
          className={`px-4 py-2 mx-2 ${billingCycle === 'annual' ? 'bg-blue-500 text-white' : 'bg-gray-400'} rounded`}
        >
          12 Months
        </button>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${pkg.cardColor} flex flex-col justify-between h-full transition-transform transform hover:scale-105 hover:bg-gradient-to-tr ${pkg.highlight ? 'border-4 border-hover scale-100' : ''}`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="2xl:text-3xl text-2xl font-bold text-black">{pkg.name}</h2>
                {pkg.highlight && (
                  <span className="bg-red-500 text-white 2xl:px-6 px-2 animate-pulse py-2 rounded text-sm">Best Value</span>
                )}
              </div>
              <p className="text-md text-red-500 line-through">{pkg.originalPrice}</p>
              <p className="text-3xl font-bold text-hover flex items-center gap-2">
                {pkg.prices[billingCycle]}
                {billingCycle !== 'monthly' && (
                  <span className="text-red-500 text-sm">
                    (Save {billingCycle === 'semiAnnual' ? discounts[pkg.name].semiAnnual : discounts[pkg.name].annual}%)
                  </span>
                )}
              </p>
              <div className="w-full h-[1px] bg-gray-400 opacity-80 my-10"></div>
              {pkg.features.map((feature, i) => (
                <div key={i} className="mb-4 gap-4">
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center text-gray-950 text-sm px-3">
                        <FaCheckCircle className="text-green-500 mr-4 text-sm" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="w-full h-[1px] bg-gray-400 my-10"></div>
              <p className="text-red-500 text-xs font-semibold italic mb-2">{pkg.totalReach}</p>
              <p className="text-red-500 text-xs font-semibold italic mb-2">{pkg.totalFollowers}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-10">
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
