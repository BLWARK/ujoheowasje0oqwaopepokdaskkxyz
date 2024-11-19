"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CardPillar from "@/components/card/Card-pillar";
import { AiOutlineArrowRight } from "react-icons/ai";

const Digital = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Durasi animasi (ms)
      easing: "ease-out", // Gaya easing
      once: true, // Animasi hanya terjadi sekali
    });
  }, []);

  const [selectedBox, setSelectedBox] = useState(0);

  const handleBoxClick = (boxIndex) => {
    setSelectedBox(boxIndex); // Simpan index kotak yang diklik
  };

  useEffect(() => {
    if (selectedBox !== null) {
      const sectionIds = ["", "DOOH", "Rental", "Digital-Marketing"]; // Mapping ID
      const section = document.getElementById(sectionIds[selectedBox]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedBox]);

  return (
    <div className="relative w-full h-full bg-gray-900 text-white ">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] 2xl:h-[750px]">
        <Image
          src="/Digital.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div
          data-aos="fade-up"
          className="title w-full px-4 md:px-20 lg:px-40 absolute inset-0 flex flex-col justify-start items-center text-start text-white z-1 2xl:mt-[160px] mt-28"
        >
          <p className="w-full text-secondary text-[26px] md:text-[48px] lg:text-[54px] font-bold py-4  text-center">
            Layanan Rental LED (AUVI89)
          </p>
          <div
            data-aos="fade-up"
            className="relative grid grid-cols-2 2xl:grid-cols-4 gap-10 justify-center items-center w-full h-auto  mt-10 z-1 2xl:px-20 px-5  2xl:mt-20   place-items-center"
          >
            {[
              { img: "/1.jpg", title: "XYZONE Media" },
              { img: "/1.jpg", title: "Media Placement" },
              { img: "/1.jpg", title: "Rental LED (AUVI89)" },
              { img: "/1.jpg", title: "Digital Marketing" },
            ].map((box, index) => (
              <div
                key={index}
                className={`w-[150px] h-[150px] 2xl:h-[250px] 2xl:w-[250px] rounded-2xl nav-link cursor-custom flex items-center justify-center relative overflow-hidden ${
                  selectedBox === index
                    ? "2xl:border-4 border-2 border-secondary bg-gray-800 scale-110"
                    : "bg-gray-700 hover:border-secondary  hover:border-4 hover:scale-105"
                } transition-all duration-300`}
                onClick={() => handleBoxClick(index)}
              >
                {/* Gambar */}
                <Image
                  src={box.img} // Gambar diambil dari data array
                  alt={box.title}
                  width={150}
                  height={150}
                  className="object-cover rounded-lg w-full h-full"
                />

                {/* Title di dalam kotak */}
                <div className="absolute 2xl:py-10 py-4 bottom-0 flex items-center justify-center ">
                  <p className="text-white font-bold text-center text-[10px] md:text-base lg:text-lg">
                    {box.title} {/* Title diambil dari data array */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Kotak di Tengah */}

      {/* Konten Dinamis */}
      <div
        data-aos="fade-up"
        className="relative dynamic-content w-full 2xl:px-40  px-5 2xl:mt-10   mt-48"
      >
        {selectedBox === 0 && (
          <div id="XYZONE" key={selectedBox} data-aos="fade-left">
            <h2 className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] 2xl:py-5 2xl:mb-0 mb-4 font-bold">
              XYZONE Media (Portal News)
            </h2>
            <p>
              XYZONE Media is a news portal that provides up-to-date and
              in-depth information across various categories such as News,
              Entertainment, Technology, Sport, C-Level, Lifestyle, and
              Community. As a comprehensive news platform, XYZONE Media aims to
              be a trusted source of information for audiences who wish to stay
              informed about developments in the digital world, entertainment,
              technology, sports, and other relevant issues affecting daily
              life.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[28px] md:text-[38px] lg:text-[32px] font-bold mt-10 ">
              Key Services:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">News:</span> Offering
                the latest information and updates on important events in
                Indonesia and globally, ensuring that audiences receive accurate
                and relevant news.
              </li>
              <li>
                <span className="font-bold text-secondary">Entertainment:</span>{" "}
                Providing news and reviews on the entertainment industry,
                including celebrities, films, music, and trending pop culture
                topics.
              </li>
              <li>
                <span className="font-bold text-secondary">Technology: </span>{" "}
                Offering articles and news about the latest technological
                developments, digital innovations, and knowledge related to the
                technology world.
              </li>
              <li>
                <span className="font-bold text-secondary">Sport:</span>{" "}
                Delivering information on the world of sports, including match
                results, team news, and major sporting events.
              </li>
              <li>
                <span className="font-bold text-secondary">C-Level:</span>{" "}
                Featuring exclusive interviews and reviews with business
                leaders, corporate executives, and insights into the latest
                trends and strategies shaping the corporate world.
              </li>
              <li>
                <span className="font-bold text-secondary">Lifestyle:</span>{" "}
                Providing articles on modern lifestyles, trends, health, and
                life guides relevant to today&apos;s audience.
              </li>
              <li>
                <span className="font-bold text-secondary">Community:</span>{" "}
                Delivering news and information about growing creative and
                social communities in Indonesia, fostering interaction among
                community members.{" "}
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages:
            </div>
            <p className="px-2 2xl:px-0">
              XYZONE Media offers a news platform that blends various engaging
              topics with a broad audience base. With its diverse categories,
              the platform offers clients the opportunity to market their
              products or services to different market segments, reaching
              audiences from various backgrounds and interests.
            </p>
            <a
              href="https://xyzonemedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold mt-8 italic underline flex items-center gap-2 cursor-custom nav-link"
            >
              Visit XYZONE Media
              <AiOutlineArrowRight className="text-lg font-bold" />
            </a>
          </div>
        )}
        {selectedBox === 1 && (
          <div id="DOOH" key={selectedBox} data-aos="fade-left">
            <h2 className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] 2xl:py-5 2xl:mb-0 mb-4 font-bold">
              Media Placement & Monitoring: TV, Radio, Print Ad, Digital Out of
              Home (DOOH)
            </h2>
            <p>
              Media Placement & Monitoring is a service designed to ensure that
              clients' advertising campaigns reach the right audience through a
              variety of media channels, both traditional and digital. This
              service helps clients strategically place their ads to achieve
              maximum impact and connect with their desired target audience.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[28px] md:text-[38px] lg:text-[32px] font-bold mt-10 ">
              Key Services:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  TV Advertising Placement:
                </span>{" "}
                We plan and manage ad placements on national and local
                television channels that are most relevant to the target
                audience. This ensures that the ad message reaches the right
                viewers at the right time.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Radio Advertising Placement:
                </span>{" "}
                We offer audio ad placement services on radio stations with wide
                reach, targeting the audience demographics that match our
                clients' needs. We ensure that the ads are heard by the
                appropriate listeners based on the desired profile.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Print Media Advertising Placement:
                </span>{" "}
                We manage ad placements in various print media such as
                newspapers, magazines, and other publications, allowing for more
                targeted audience reach.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Digital Out of Home (DOOH):
                </span>{" "}
                We provide ad placement on digital outdoor media, such as LED
                screens in malls, train stations, or other public spaces. DOOH
                offers a dynamic and new way to engage with audiences in public
                areas.
              </li>
            </ul>

            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages:
            </div>
            <p className="px-2 2xl:px-0">
              We provide flexible and integrated media placement solutions,
              allowing clients to reach their target audience through the most
              relevant media channels. Additionally, we have the capability to
              monitor campaign effectiveness in real-time across various media
              platforms, providing insights that can be used to further optimize
              marketing strategies.
            </p>
          </div>
        )}
        {selectedBox === 2 && (
          <div id="Rental" key={selectedBox} data-aos="fade-left">
            <h2 className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] font-bold py-5">
              LED Rental Service (AUVI89)
            </h2>
            <p>
              The LED Rental Service (AUVI89) offers high-quality LED screen
              rental solutions for a wide range of events and marketing
              campaigns, both indoor and outdoor. This service is designed to
              provide maximum visual impact, making your event or promotion more
              engaging and effective.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Key Services:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  LED Screen Rental:
                </span>{" "}
                We offer various sizes and types of LED screens that can be used
                for different purposes, including exhibitions, music concerts,
                product launches, and outdoor promotional campaigns. Our LED
                screens are designed to deliver sharp and bright visuals,
                ensuring that your message is clearly visible to the audience.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Installation and Maintenance:
                </span>{" "}
                We provide professional installation and maintenance services to
                ensure optimal screen performance throughout your event. Our
                experienced team will handle the setup with care and perform
                routine maintenance to ensure that the screens operate smoothly.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Interactive Content:
                </span>{" "}
                In addition to LED screen rentals, we also offer content
                management services for the screens, including advertisements,
                promotional videos, and even live event streaming. With
                interactive and engaging content, we help our clients create a
                more immersive experience for their audience.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages:
            </div>
            <p className="px-2 2xl:px-0">
              The AUVI89 LED Rental Service offers clients the opportunity to
              leverage advanced visual technology to capture audience attention
              and create an unforgettable experience at their events. With
              superior screen quality and professional support, your event will
              leave a lasting impression on attendees.
            </p>
          </div>
        )}
        {selectedBox === 3 && (
          <div id="Digital-Marketing" key={selectedBox} data-aos="fade-left">
            <h2 className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] font-bold py-5">
              Digital Marketing Services
            </h2>
            <p>
              PT BEKI’s Digital Marketing services provide a variety of digital
              marketing strategies designed to expand reach and enhance audience
              engagement across digital platforms. With an integrated approach
              and the latest technologies, our services include KOL/Influencer
              Marketing, Social Media Management, Multi-Channel Network (MCN),
              and Web Development to help clients maximize their digital
              marketing potential.
            </p>

            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Key Services:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  KOL/Influencer Marketing:
                </span>{" "}
                We connect clients with relevant Key Opinion Leaders (KOL) and
                influencers to introduce their products or services to a wider
                audience. Collaborating with the right influencers helps clients
                reach larger markets and build trust in their brand.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Social Media Management:
                </span>{" "}
                Our service covers comprehensive management of client social
                media accounts, from creating creative content to managing
                audience interactions on platforms such as Instagram, Facebook,
                Twitter, and more. We help clients maintain a consistent and
                engaging online presence.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Multi-Channel Network (MCN):
                </span>{" "}
                We offer services for content creators in managing their
                channels on platforms such as YouTube, Instagram, and TikTok.
                Additionally, we assist them in monetizing and collaborating
                with brands to increase their revenue and exposure.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Web Development:
                </span>{" "}
                We provide responsive and visually appealing website development
                services, whether for promotional purposes, e-commerce, or
                enhancing brand presence online. We ensure that client websites
                are not only functional but also provide an excellent user
                experience.
              </li>
            </ul>

            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages of PT BEKI Digital Media Marketing Services
            </div>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Integrated Approach:
                </span>{" "}
                Our Digital Media Marketing services bring together various
                aspects of digital marketing in one comprehensive package, from
                media placement to content management and web development,
                ensuring a consistent and effective campaign across various
                online platforms.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Innovation and Technology:
                </span>{" "}
                We leverage the latest technologies, including Digital Out of
                Home (DOOH), LED screens, and other digital tools, to help
                clients reach their audience in a more modern and impactful way.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Monitoring and Analytics:
                </span>{" "}
                We provide the ability to monitor and analyze campaign
                performance across multiple platforms, enabling clients to
                assess the effectiveness and ROI of their campaigns accurately
                and make data-driven decisions.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Creativity and Strategy:
                </span>{" "}
                Each service is designed to create campaigns that are not only
                engaging but also strategic and relevant to the target audience,
                ensuring that the message is delivered effectively.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Customizable Services:
                </span>{" "}
                We offer services that can be tailored to meet the specific
                needs of clients, from media channel selection to content
                development that aligns with their marketing objectives,
                providing flexible and effective solutions.
              </li>
            </ul>

            <p className="px-2 2xl:px-0">
              With a holistic approach and advanced technology, PT BEKI provides
              Digital Media Marketing services designed to help clients build a
              strong and successful brand in the ever-evolving digital world. We
              integrate innovative and effective marketing strategies, from
              influencer marketing to social media management, ensuring that
              clients' brands reach the right audience and achieve their
              business objectives with maximum results.
            </p>
          </div>
        )}
        <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
      </div>

      <div className="2xl:w-full flex justify-center items-center">
        <CardPillar />
      </div>
    </div>
  );
};

export default Digital;
