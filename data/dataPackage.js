// dataPackage.js

const discounts = {
    "Silver BroadReach": { semiAnnual: 5.56, annual: 12.0 },
    "Gold OmniReach": { semiAnnual: 7.08, annual: 12.92 },
    "Platinum OmniMax": { semiAnnual: 5.84, annual: 11.99 },
    "Diamond ImpactReach": { semiAnnual: 6.1, annual: 12.1 },
  };
  
  const packages = [
    {
      name: "Silver BroadReach",
      highlight: false,
      cardColor: "bg-white",
      prices: {
        monthly: "Rp 18,000,000",
        semiAnnual: "Rp 102,000,000",
        annual: "Rp 190,080,000",
      },
      totalReach: "Total Reach: 2,000,000 - 3,500,000/month",
      totalFollowers: "Total Followers: 500 - 1,500 followers/month",
      features: [
        {
          title: "PORTAL",
          items: ["Giant Banner (Desktop) + Under Article Banner (Mobile)"],
        },
        {
          title: "XYZONE TV",
          items: [
            "3x Ad Libs + 3x Super Impose + Product Placement + Product Usage",
          ],
        },
      ],
    },
    {
      name: "Gold OmniReach",
      highlight: false,
      cardColor: "bg-white",
      prices: {
        monthly: "Rp 40,000,000",
        semiAnnual: "Rp 223,000,000",
        annual: "Rp 418,000,000",
      },
      totalReach: "Total Reach: 2,500,000 - 8,000,000/month",
      totalFollowers: "Total Followers: 1,500 - 3,500 followers/month",
      features: [
        {
          title: "SOCIAL MEDIA",
          items: ["1 Feed Post + 1 Story on two accounts (XYZONEMEDIA & LBJ)"],
        },
        {
          title: "XYZONE TV",
          items: ["5x Ad Libs + 5x Super Impose + Product Placement"],
        },
        {
          title: "PORTAL",
          items: ["Giant Banner (Desktop) + Bottom Banner (Mobile)"],
        },
      ],
    },
    {
      name: "Platinum OmniMax",
      highlight: true,
      cardColor: "bg-white",
      prices: {
        monthly: "Rp 48,500,000",
        semiAnnual: "Rp 274,000,000",
        annual: "Rp 512,200,000",
      },
      totalReach: "Total Reach: 4,000,000 - 8,000,000/month",
      totalFollowers: "Total Followers: 3,000 - 7,000 followers/month",
      features: [
        {
          title: "SOCIAL MEDIA MANAGEMENT",
          items: [
            "20 Instagram Posts (Feed), 70 Stories, 10 Reels",
            "10 Twitter Posts",
            "10 TikTok Posts",
            "Audience Interaction Management (Comments)",
            "Monthly Performance Report (KPIs: Reach & Followers)",
            "2 Paid Ads per month",
            "500 Digital Army per month",
            "Content Adjustments to the Latest Trends",
          ],
        },
        {
          title: "XYZONE TV",
          items: [
            "5x Ad Libs + 5x Super Impose + Product Placement + Product Usage",
          ],
        },
        {
          title: "PORTAL",
          items: ["Top Banner (Desktop) + Rectangle Banner (Mobile)"],
        },
      ],
    },
    {
      name: "Diamond ImpactReach",
      highlight: false,
      cardColor: "bg-white",
      prices: {
        monthly: "Rp 88,000,000",
        semiAnnual: "Rp 495,800,000",
        annual: "Rp 928,200,000",
      },
      totalReach: "Total Reach: 5,000,000 - 10,000,000/month",
      totalFollowers: "Total Followers: 4,000 - 10,000 followers/month",
      features: [
        {
          title: "SOCIAL MEDIA MANAGEMENT",
          items: [
            "25 Instagram Posts (Feed), 90 Stories, 15 Reels",
            "20 Twitter Posts",
            "15 TikTok Posts",
            "Audience Interaction Management (Comments)",
            "Monthly Performance Report (KPIs: Reach & Followers)",
            "500 Digital Army per month",
            "Detailed Monthly Performance Report with Recommendations",
            "3 Paid Ads per month",
            "Customized Content Adjustments to Current Trends - Exclusive",
            "SEO-Optimized Hashtags & Captions for Maximum Engagement - Exclusive",
            "Dedicated Brand Landing Page (excluding domain & server)",
          ],
        },
        {
          title: "XYZONE TV",
          items: [
            "7x Ad Libs + 7x Super Impose + Product Placement + Product Usage",
          ],
        },
        {
          title: "PORTAL",
          items: ["Top Banner (Desktop) + Rectangle Banner (Mobile)"],
        },
        {
          title: "SOCIAL MEDIA",
          items: ["1 Feed Post + 1 Story + 1 Reel on two accounts"],
        },
      ],
    },
  ];
  
  export { packages, discounts };
  