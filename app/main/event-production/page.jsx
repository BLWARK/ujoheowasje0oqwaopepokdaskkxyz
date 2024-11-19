"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CardPillar from "@/components/card/Card-pillar"

const Event = () => {
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

   // Scroll to view ketika selectedBox berubah
   useEffect(() => {
    if (selectedBox !== null) {
      const sectionIds = ["", "Event", "MICE", "Brand"]; // Mapping ID
      const section = document.getElementById(sectionIds[selectedBox]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

      }
    }
  }, [selectedBox]);
  

  return (
    <div className="relative mx-auto overflow-hidden max-w-full w-full h-full bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] 2xl:h-[750px]"
       
        
      >
        <Image
          src="/Event.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div data-aos="fade-up" className="title w-full px-4 md:px-20 lg:px-40 absolute inset-0 flex flex-col justify-start items-center text-start text-white z-1 2xl:mt-[160px] mt-28">
          <p
            className="w-full text-secondary text-[26px] md:text-[48px] lg:text-[54px] font-bold py-4  text-center"
           >
            Event and Production
          </p>

          <div data-aos="fade-up" className="relative grid grid-cols-2 2xl:grid-cols-4 gap-10 justify-center items-center w-full h-auto  mt-10 z-1 2xl:px-20 px-5 max-w-full 2xl:mt-20   place-items-center">
            {[
              { img: "/1.jpg", title: "Production" },
              { img: "/1.jpg", title: "Event Management" },
              { img: "/1.jpg", title: "MICE" },
              { img: "/1.jpg", title: "Brand Activation" },
            ].map((box, index) => (
              <div
                key={index}
                
                className={`w-[150px] h-[150px] 2xl:h-[300px] 2xl:w-[300px] rounded-2xl nav-link cursor-custom flex items-center justify-center relative overflow-hidden ${
                  selectedBox === index
                    ? "2xl:border-4 border-2 border-secondary bg-gray-800 scale-105"
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
      <div data-aos="fade-up" className="relative dynamic-content 2xl:w-full  2xl:px-20 w-full mx-auto overflow-hidden  px-0 2xl:mt-20  mt-10 max-w-full text-left">
        {selectedBox === 0 && (
          <div id="Production"  key={selectedBox}  data-aos="fade-left" className="2xl:w-full w-full 2xl:px-0 px-5 overflow-hidden "   >
            <h2 className=" text-secondary text-[28px] md:text-[48px] lg:text-[44px] 2xl:py-5 2xl:mb-0 mb-4 font-bold">
              Production
            </h2>
            <p>
              PT BEKI’s Production services encompass every stage of event
              production, from crafting innovative concepts to executing
              technical operations seamlessly on-site, ensuring a flawless and
              memorable experience.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[20px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-3 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Content Creation:
                </span>{" "}
                Producing engaging videos, multimedia presentations, and
                promotional materials to enhance the event experience.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Production Management:
                </span>{" "}
                Overseeing event logistics, scheduling, venue selection, and
                team coordination for smooth execution.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Equipment Supply:
                </span>{" "}
                Providing state-of-the-art audio-visual and technical equipment
                tailored to event needs.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Event Direction:
                </span>{" "}
                Managing event flow and ensuring every detail aligns with the
                client’s vision for a flawless experience.
              </li>
            </ul>
            
          </div>
        )}
        {selectedBox === 1 && (
          <div id="Event"  key={selectedBox}  data-aos="fade-left" className="relative 2xl:w-full w-full 2xl:px-0 px-10 max-w-full overflow-hidden " >
            <h2 className=" text-secondary text-[26px] md:text-[48px] lg:text-[44px] py-5 font-bold">
              Event Management
            </h2>
            <p>
              PT BEKI’s Event Management services offer comprehensive solutions
              for planning, executing, and managing events tailored to client
              needs. From business meetings to large-scale entertainment, we
              ensure seamless execution by handling everything from concept
              development and logistics to technical coordination and guest
              management. With a focus on precision, creativity, and client
              satisfaction, we deliver impactful experiences that align with
              your goals and leave a lasting impression.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-0 py-5 marker:text-hover flex flex-col gap-4 max-w-full">
              <li>
                <span className="font-bold text-secondary">
                  Event Planning:
                </span>{" "}
                We assist clients in creating event strategies and concepts
                tailored to their specific goals and budgets. This process
                includes in-depth discussions to understand the client&apos;s vision,
                selecting the right theme, and designing every detail of the
                event to deliver a unique and memorable experience.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Logistics Coordination:
                </span>{" "}
                Coordinating all technical and operational aspects of the event
                is one of our core strengths. From choosing the ideal venue and
                providing catering that matches participant preferences, to
                managing guest invitations, event security, transportation, and
                seating arrangements, we ensure that every logistical element is
                seamlessly executed.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Time Management:
                </span>{" "}
                We ensure that every session or activity within the event
                adheres to the predetermined schedule. Effective time management
                includes detailed rundown planning, monitoring each session, and
                anticipating potential delays to ensure the event flows smoothly
                and efficiently.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Team Management:
                </span>{" "}
                Our team comprises trained professionals who handle all aspects
                of event management. From warmly welcoming guests and ensuring
                smooth technical operations to overseeing the entire event
                on-site, we work tirelessly to deliver the best experience for
                our clients and their attendees.
              </li>
            </ul>
          </div>
        )}
        {selectedBox === 2 && (
          <div  id="MICE" key={selectedBox}  data-aos="fade-left" className="2xl:w-full w-full 2xl:px-0 px-5 overflow-hidden ">
            <h2 className=" text-secondary text-[26px] md:text-[48px] lg:text-[44px] font-bold py-5">
              MICE (Meetings, Incentives, Conferences, and Exhibitions)
            </h2>
            <p>
              PT BEKI also provides MICE (Meetings, Incentives, Conferences, and
              Exhibitions) services, covering business meetings, incentive
              programs, conferences, and exhibitions. These services are aimed
              at companies looking to host events to strengthen business
              relationships, enhance knowledge, and introduce products or
              services to a wider audience.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Conferences and Seminars:
                </span>{" "}
                We offer comprehensive services for organizing professional
                conferences and seminars, from planning to execution. These
                events are designed to bring together experts and professionals
                from various industries to share knowledge, introduce the latest
                trends, and expand networks. Each session is carefully
                structured to achieve educational objectives and provide value
                to participants.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Exhibitions and Expos:
                </span>{" "}
                We organize exhibitions and expos that offer companies a
                platform to showcase their latest products, services, and
                innovations to a wider audience, including professionals,
                potential customers, and the media. These events help introduce
                brands, expand market reach, and create collaboration
                opportunities with other industry partners.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Incentive Events:
                </span>{" "}
                We design incentive programs to reward outstanding employees or
                clients with special events, such as trips, exclusive
                experiences, or award ceremonies. These programs not only boost
                motivation and loyalty but also strengthen the relationship
                between the company and the recipients, creating memorable and
                impactful experiences.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Business Meetings:
                </span>{" "}
                We manage business meetings, discussions, and formal networking
                events designed to strengthen professional relationships, build
                strategic partnerships, and foster idea exchange. We ensure that
                every meeting runs smoothly and efficiently, providing the
                necessary facilities and support to achieve the desired
                outcomes, whether for small or large-scale gatherings.
              </li>
            </ul>
          </div>
        )}
        {selectedBox === 3 && (
          <div  id="Brand"  key={selectedBox}  data-aos="fade-left" className="2xl:w-full w-full 2xl:px-0 px-5 overflow-hidden " 
          >
            <h2  className=" text-secondary text-[26px] md:text-[48px] lg:text-[44px] py-5 font-bold">
              Brand Activation
            </h2>
            <p>
              Brand Activation is a marketing strategy aimed at increasing
              consumer engagement with a brand through interactive and creative
              activities. PT BEKI manages brand activation campaigns to help
              clients create deep and authentic experiences for their target
              audience, strengthening emotional connections and boosting brand
              awareness and loyalty. We design and execute a variety of
              activities that invite direct consumer participation, both
              physically and digitally, to create lasting, positive impact on
              the brand.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Brand Activation Campaigns:
                </span>{" "}
                We design brand activation campaigns that integrate both online
                and offline experiences, allowing consumers to engage directly
                with the brand through various platforms. This approach aims to
                foster a deeper, emotional connection between the brand and the
                audience, while also strengthening brand recognition among
                consumers.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Promotions and Sampling:
                </span>{" "}
                We organize product promotions and sampling events at carefully
                chosen strategic locations such as shopping centers, large
                events, or other high-traffic venues. The goal is to give the
                audience a direct opportunity to try the product, allowing them
                to experience its benefits firsthand and develop a closer
                connection with the brand.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Interactive Experiences:
                </span>{" "}
                We host interactive events such as roadshows, exhibitions, and
                live experiences that allow the audience to actively participate
                and engage with the products or services we offer. Every event
                is crafted to create a memorable and impactful experience,
                building a stronger bond between the consumer and the brand.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Social Media Campaigns:
                </span>{" "}
                We launch social media campaigns designed to expand the brand’s
                reach through digital platforms. By employing creative content
                strategies and maintaining continuous interaction with the
                audience, we ensure that these campaigns amplify brand
                influence, boost awareness, and drive direct consumer engagement
                in the online space.
              </li>
            </ul>
          </div>
        )}
         <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
      </div>
      <div className="2xl:w-full flex justify-center items-center">
      <CardPillar/>
      </div>
    </div>
  );
};

export default Event;
