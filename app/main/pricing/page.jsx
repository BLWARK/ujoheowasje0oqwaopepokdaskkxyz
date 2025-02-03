"use client"
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Paket data pricing
  const packages = [
    {
      name: 'Silver BroadReach',
      highlight: false,
      cardColor: 'bg-gradient-to-br from-white to-cyan-400',
      prices: {
        monthly: 'Rp 11,000,000/month',
        semiAnnual: 'Rp 62,500,000/6 months',
        annual: 'Rp 116,500,000/year',
      },
      originalPrice: 'Rp 18,000,000/month',
      totalReach: '2,000,000 - 3,500,000 reach/month',
      totalFollowers: '500 - 1,500 followers/month',
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
        monthly: 'Rp 20,000,000/month',
        semiAnnual: 'Rp 110,500,000/6 months',
        annual: 'Rp 206,500,000/year',
      },
      originalPrice: 'Rp 39,522,200/month',
      totalReach: '2,500,000 - 8,000,000 reach/month',
      totalFollowers: '1,500 - 3,500 followers/month',
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
        monthly: 'Rp 28,000,000/month',
        semiAnnual: 'Rp 158,000,000/6 months',
        annual: 'Rp 296,000,000/year',
      },
      originalPrice: 'Rp 48,499,960/month',
      totalReach: '4,000,000 - 8,000,000 reach/month',
      totalFollowers: '3,000 - 7,000 followers/month',
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
        monthly: 'Rp 51,000,000/month',
        semiAnnual: 'Rp 283,500,000/6 months',
        annual: 'Rp 531,000,000/year',
      },
      originalPrice: 'Rp 87,891,600/month',
      totalReach: '5,000,000 - 10,000,000 reach/month',
      totalFollowers: '4,000 - 10,000 followers/month',
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
          ].filter(Boolean) // Filter out empty strings for conditional items
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
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center mb-4 text-secondary">BEKI PACKAGE 2025</h1>
        <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
        <p className="text-center text-gray-300 mb-8 w-[70%]">
          PT Bisnis Ekosistem Kreatif Indonesia melalui XYZONE Media menghadirkan paket pemasaran terintegrasi 
          untuk mendukung pertumbuhan bisnis di era digital. Paket ini dirancang untuk meningkatkan jangkauan, 
          memperkuat branding, dan meningkatkan engagement.
        </p>
      </div>
      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
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
            className={`p-6 rounded-lg shadow-md ${pkg.cardColor} flex flex-col justify-between h-full hover:scale-105 hover:bg-gradient-to-tr from-white to-cyan-400 transition-transform ${pkg.highlight ? 'border-4 border-blue-500 scale-100' : ''}`}
          >
            <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-black">{pkg.name}</h2>
              {pkg.highlight && (
                <span className="bg-red-500 text-white px-6 animate-pulse py-2 rounded text-sm">Best Value</span>
              )}
            </div>
              <p className="text-md text-red-500 line-through">{pkg.originalPrice}</p>
              <p className="text-3xl font-bold text-hover mb-10">{pkg.prices[billingCycle]}</p>

              {pkg.features.map((feature, i) => (
                <div key={i} className="mb-4 gap-4">
                  <h3 className="font-bold text-gray-800 mb-2 ">{feature.title}</h3>
                  <ul className='space-y-2'>
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center text-gray-950 text-sm px-3 ">
                        <FaCheckCircle className="text-green-500 mr-4 text-sm" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-gray-600 text-xs mb-2">{pkg.totalReach}</p>
              <p className="text-gray-600 text-xs mb-2">{pkg.totalFollowers}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
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
