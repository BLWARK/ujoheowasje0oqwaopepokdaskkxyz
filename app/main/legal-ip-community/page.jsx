"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import CardPillar from "@/components/card/Card-pillar";
import { AiOutlineArrowRight } from "react-icons/ai";

const Legal = () => {
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
      const sectionIds = ["", "Crypto", "Podcast", "FILM", "Community"]; // Mapping ID
      const section = document.getElementById(sectionIds[selectedBox]);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedBox]);

  return (
    <div className="relative w-full h-full bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] 2xl:h-[750px]">
        <Image
          src="/Legal.jpg"
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
            Legal IP and Community
          </p>
          <div
            data-aos="fade-up"
            className="relative grid grid-cols-2 2xl:grid-cols-5 gap-10 justify-center items-center w-full h-auto  mt-10 z-1 2xl:px-20 px-5  2xl:mt-20   place-items-center"
          >
            {[
              { img: "/LAWFIRM.jpg", title: "Law Firm" },
              { img: "/CRYPTO.jpg", title: "XYZ Crypto Universe" },
              { img: "/PODCAST.jpg", title: "Podcast" },
              { img: "/FILM.jpg", title: "Film" },
              { img: "/COMU.jpg", title: "Community" },
            ].map((box, index) => (
              <div
                key={index}
                className={`w-[150px] h-[150px] 2xl:h-[250px] 2xl:w-[250px] rounded-2xl nav-link cursor-custom flex items-center justify-center relative overflow-hidden ${
                  selectedBox === index
                    ? "2xl:border-4 border-2 border-blue-400 bg-gray-800 scale-110"
                    : "bg-gray-700 hover:border-blue-400  hover:border-4 hover:scale-105"
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
                <div className="absolute 2xl:py-15 py-4 bottom-0 flex items-center justify-center ">
                  <p className="text-white font-bold text-center text-[10px] md:text-base lg:text-lg">
                    {box.title} {/* Title diambil dari data array */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Konten Dinamis */}
      <div
        data-aos="fade-up"
        className="relative dynamic-content 2xl:w-full  2xl:px-20 w-full mx-auto overflow-hidden  px-4 2xl:mt-5  mt-48 max-w-full text-left"
      >
        {selectedBox === 0 && (
          <div  key={selectedBox} >
            <h2 id="Law Firm" className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] 2xl:py-5 2xl:mb-0 mb-4 font-bold">
              Law Firm
            </h2>
            <p>
              PT BEKI provides law firm services specifically designed to
              support the legal needs of creative communities, individuals, and
              businesses in Indonesia. These services offer comprehensive legal
              solutions in both Litigation and Non-Litigation areas, aimed at
              protecting the rights and interests of clients across various
              creative industries and ensuring legal security in every action
              taken.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[28px] md:text-[38px] lg:text-[32px] font-bold mt-10 ">
              Main Services
            </p>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Litigation
            </div>
            <p className="px-2 2xl:px-0">
              Our litigation services focus on resolving disputes through the
              court system with a systematic and thorough approach. Our
              experienced legal team is committed to providing professional
              legal support in a wide range of complex legal areas, including:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Civil Disputes:
                </span>{" "}
                We handle cases related to breach of contract, business
                disputes, and property issues, with the goal of protecting our
                clients rights and ensuring fair and just resolutions.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Criminal Cases:
                </span>{" "}
                We provide legal representation for clients involved in criminal
                cases, whether as victims or defendants, focusing on protecting
                their rights throughout the judicial process.
              </li>
              <li>
                <span className="font-bold text-secondary">Labor Law:</span> We
                address various employment-related conflicts, including cases of
                dismissal (termination) and other employee rights, with a focus
                on fairness and compliance with labor regulations.F
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Intellectual Property (IP) Disputes:
                </span>{" "}
                We offer strong legal protection against copyright infringement,
                trademark violations, and patent issues, ensuring that our
                clients intellectual property is safeguarded from misuse or
                infringement.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Corporate Disputes:
                </span>{" "}
                We handle disputes within the corporate world, including
                conflicts between shareholders, management, and other internal
                parties, with the aim of achieving a resolution that benefits
                all involved parties.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Non-Litigation
            </div>
            <p className="px-2 2xl:px-0">
              Our non-litigation services are designed to provide efficient,
              effective, and proactive legal solutions without the need for
              court involvement. This approach allows us to resolve legal issues
              for our clients more quickly and cost-effectively. Our primary
              non-litigation services include:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Legal Consultation:
                </span>{" "}
                We offer in-depth legal opinions on various cases or business
                plans, helping clients understand the legal implications of
                their decisions and guiding them toward informed choices.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Mediation & Arbitration:
                </span>{" "}
                We offer mediation and arbitration services to assist clients in
                resolving disputes without resorting to lengthy and costly
                litigation. Acting as a neutral third party, we ensure that a
                peaceful and mutually beneficial resolution can be reached.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Contract Drafting and Review:
                </span>{" "}
                We We assist clients in drafting legally sound contracts and
                reviewing existing agreements to ensure maximum legal protection
                and mitigate potential future legal risks.
              </li>
              <li className="text-secondary font-bold">
                {" "}
                Intellectual Property (IP) Registration:
              </li>

              <ul className=" list-disc px-5  text-white">
                <li className="text-white">
                  We provide registration services for trademarks, copyrights,
                  patents, and industrial designs, ensuring that clients
                  products and innovations are protected.
                </li>
                <li>
                  We also offer management services for clients IP portfolios,
                  ensuring that all intellectual property assets are properly
                  protected and in compliance with applicable laws.
                </li>
              </ul>

              <li className="text-secondary font-bold">
                {" "}
                Corporate Legal Compliance:
              </li>

              <ul className=" list-disc px-5  text-white">
                <li className="text-white">
                  We assist companies in drafting essential legal documents such
                  as articles of incorporation, amendments to the articles of
                  association, and other related documents to ensure legal
                  compliance.
                </li>
                <li>
                  Our legal audit services help companies ensure that they are
                  in full compliance with applicable regulations and identify
                  any potential legal risks that may disrupt their operations.
                </li>
              </ul>

              <li>
                <span className="font-bold text-secondary">Due Diligence:</span>{" "}
                We conduct comprehensive legal reviews related to mergers,
                acquisitions, or other major transactions, providing clients
                with a clear understanding of the legal risks involved in such
                deals.
              </li>
              <li>
                <span className="font-bold text-secondary">Negotiation:</span>{" "}
                We assist clients in negotiation processes to reach fair and
                advantageous agreements, avoiding prolonged conflicts and
                ensuring that the outcome provides maximum benefit for all
                parties involved.
              </li>
            </ul>
          </div>
        )}
        {selectedBox === 1 && (
          <div  key={selectedBox} >
            <h2 id="Crypto" className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] 2xl:py-5 2xl:mb-0 mb-4 font-bold">
              XYZ Crypto Universe
            </h2>
            <p>
              PT Bisnis Ekosistem Kreatif Indonesia (PT BEKI) introduces XYZ
              Crypto Universe, a blockchain-based ecosystem aimed at advancing
              the creative community and technology sectors in Indonesia.
              Combining digital innovation with blockchain technology, XYZ
              Crypto Universe is designed to create new opportunities within the
              digital economy, empowering various industries through secure,
              transparent, and sustainable approaches.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[28px] md:text-[38px] lg:text-[32px] font-bold mt-10 ">
              Main Services
            </p>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              1. XYZMER COIN
            </div>
            <p className="px-2 2xl:px-0">
              XYZMER Coin is a cryptocurrency based on Binance Smart Chain that
              serves as the core of the XYZ Crypto Universe ecosystem. As the
              primary digital currency, XYZMER Coin is designed to provide
              multiple benefits and support various platforms under the PT BEKI
              umbrella.
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">Play-to-Earn:</span>{" "}
                By integrating XYZMER Coin into games and applications, players
                are given the opportunity to earn rewards directly through their
                participation on the platform. This feature enables users to
                receive compensation as they engage in various games, providing
                a new way to earn within the ecosystem.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Write-to-Earn and Read-to-Earn:
                </span>{" "}
                Users contributing to the CoinZone Media platform, whether by
                writing content or reading articles, will be rewarded with
                XYZMER Coins. This encourages active participation and enhances
                community engagement, creating a vibrant ecosystem.
              </li>
              <li>
                <span className="font-bold text-secondary">Free Trading:</span>{" "}
                In addition to its use within the ecosystem, XYZMER Coin can be
                traded on open markets. This feature adds real economic value
                for users, who can trade, hold, or reinvest their coins as
                needed, expanding the coins utility beyond the platform itself.
              </li>
            </ul>
            <p className="italic text-[14px] mb-5">
              The XYZMER Coin smart contract has undergone a thorough audit and
              is confirmed to be secure for use. According to the development
              plan, XYZMER Coin will begin active trading on open markets
              starting in Q1 2025, offering new opportunities for users and
              investors to participate in this dynamic ecosystem.
            </p>
            <a
              href="https://xyzmercoin.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold mt-8 italic underline flex items-center gap-2 cursor-custom nav-link"
            >
              Visit XYZMER Coin Website
              <AiOutlineArrowRight className="text-lg font-bold" />
            </a>

            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              2. XYZNT.io NFT Marketplace
            </div>
            <p className="px-2 2xl:px-0">
              XYZNT.io is a blockchain-based marketplace platform that
              facilitates the buying and selling of digital assets in the form
              of NFTs (Non-Fungible Tokens). As an ecosystem connecting creators
              and collectors, XYZNT.io offers various features to facilitate
              transactions while ensuring fairness and transparency for all
              parties involved.
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Creators and Collectors:
                </span>{" "}
                XYZNT.io serves as a platform for creators to sell their digital
                works such as art, music, and videos, and for collectors to
                purchase and showcase their unique NFT collections.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Transparent Royalties:
                </span>{" "}
                We provide an automated and fair royalty distribution system for
                creators, utilizing smart contract technology to ensure timely
                and accurate royalty payments. NFT Categories: The platform
                supports a wide range of NFT categories, including digital art,
                video, music, and historical collectibles, allowing users to
                buy, sell, and collect diverse types of digital assets.
              </li>
              <li>
                <span className="font-bold text-secondary">Security:</span> By
                integrating blockchain technology, XYZNT.io ensures that NFT
                ownership is verified and immutable, providing security and
                peace of mind for both creators and collectors.
              </li>
            </ul>

            <a
              href="https://xyznt.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold mt-8 italic underline flex items-center gap-2 cursor-custom nav-link"
            >
              Visit XYZNT.io Website
              <AiOutlineArrowRight className="text-lg font-bold" />
            </a>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              3. CoinZone Media
            </div>

            <p className="px-2 2xl:px-0">
              CoinZone Media is a Web3-based media platform that provides an
              innovative experience for reading, writing, and sharing news. By
              leveraging blockchain technology, CoinZone Media offers a new way
              for users to engage in the creation and consumption of news
              content in a more transparent and fair manner.
            </p>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Core Concept
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Write-to-Earn & Read-to-Earn:
                </span>{" "}
                Users are incentivized with XYZMER Coin whenever they
                participate in the platform, whether by reading or writing
                content. This feature aims to encourage engagement and reward
                active users who contribute to the content ecosystem.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  News & Education:
                </span>{" "}
                CoinZone Media focuses on news related to blockchain,
                cryptocurrency, and the creative industries, providing ongoing
                education about the latest technologies and emerging trends.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Community Rewards:
                </span>
                The platform encourages active participation from the community
                by offering tokens as incentives for contributions or
                interactions with content, strengthening user engagement in all
                aspects of the platform.
              </li>
            </ul>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Development Schedule:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">Q4 2025:</span> The
                full version of CoinZone Media will be launched, including new
                feature integrations designed to enhance community engagement
                and global accessibility, bringing the platform to a wider
                audience around the world.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              4. Blockchain Layer 1
            </div>

            <p className="px-2 2xl:px-0">
              Blockchain Layer 1 is the core infrastructure that underpins the
              entire XYZ Crypto Universe ecosystem, providing a solid and secure
              foundation for various digital applications and transactions. As
              the first layer of blockchain technology, it ensures the entire
              ecosystem operates efficiently and seamlessly, enabling the smooth
              development of platforms and applications.
            </p>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Key Functions:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Fast and Cost-Efficient Transactions:
                </span>{" "}
                Blockchain Layer 1 is designed to ensure that transactions
                across the platform are fast, secure, and cost-effective. This
                allows users to perform transactions with efficiency, without
                worrying about high fees or long waiting times.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  High Scalability:
                </span>{" "}
                With the ability to support a wide range of applications such as
                NFTs, DeFi, and DApps, Blockchain Layer 1 offers exceptional
                scalability. This ensures the platform can grow without limits,
                supporting rapid ecosystem growth and increasing demand.
              </li>
              <li>
                <span className="font-bold text-secondary">Compatibility:</span>
                Blockchain Layer 1 is open to third-party developers who wish to
                build blockchain-based applications on top of this ecosystem.
                With full support for external integrations, developers can
                create innovative solutions and expand the potential of the XYZ
                Crypto Universe ecosystem.
              </li>
            </ul>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Development Schedule:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">Q1 2028:</span> In
                the first quarter of 2028, the full version of Blockchain Layer
                1 will be released, with a primary focus on enhancing
                scalability and compatibility with decentralized applications
                (DApps) across various industries. This release will unlock vast
                potential for wider adoption globally.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              5. Exchanger
            </div>

            <p className="px-2 2xl:px-0">
              Exchanger is a cryptocurrency trading platform that allows users
              to buy, sell, and trade their digital assets in a secure and
              efficient manner. With a range of advanced features, Exchanger
              offers a seamless trading experience for all users, from beginners
              to professionals, while ensuring high liquidity and full
              integration with the XYZ Crypto Universe ecosystem.
            </p>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Key Features:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">High Security:</span>{" "}
                Exchanger uses advanced encryption technology to protect users’
                digital assets. Every transaction is secured with top-tier
                security systems, ensuring peace of mind for users.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  High Liquidity:
                </span>{" "}
                The platform supports trading of various digital assets,
                including XYZMER Coin, enabling smooth and efficient
                transactions and allowing users to buy or sell their assets at
                the best available prices.
              </li>
              <li>
                <span className="font-bold text-secondary">User-Friendly:</span>
                The platform features a simple, intuitive interface that is easy
                to navigate, making it accessible to all types of users, whether
                beginners or professionals. The clear transaction process and
                straightforward navigation enhance the user experience.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  DeFi Integration:
                </span>
                Exchanger also supports decentralized finance (DeFi) services,
                including staking and yield farming, providing users with the
                opportunity to maximize their assets through decentralized
                financial services.
              </li>
            </ul>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Development Schedule:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">Q1 2028:</span> The
                platform will be launched in Q1 2028, with a focus on full
                integration into the XYZ Crypto Universe ecosystem and
                comprehensive support for decentralized financial features. This
                release will offer new opportunities for users to take full
                advantage of various DeFi services.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-10 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages of XYZ Crypto Universe
            </div>

            <p className="px-2 2xl:px-0">
              XYZ Crypto Universe offers a range of advantages that set it apart
              as a leading blockchain ecosystem. With a focus on seamless
              integration, technological innovation, and empowering creative
              communities, this ecosystem provides a platform that is not only
              secure and efficient but also inclusive and beneficial for its
              users.
            </p>

            <p className="text-secondary text-[14px] md:text-[18px] lg:text-[18px] font-bold mt-5 ">
              Key Advantages:
            </p>
            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Integrated Ecosystem:
                </span>{" "}
                Every element within XYZ Crypto Universe supports and connects
                with each other, creating a comprehensive and sustainable user
                experience. All services, platforms, and applications operate
                harmoniously, providing users with an unparalleled experience in
                the digital and blockchain world.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Empowering Creators:
                </span>{" "}
                XYZ Crypto Universe focuses on empowering creators and the
                creative community by offering fair and transparent incentives.
                Creators are rewarded fairly for their contributions on the
                platform, utilizing blockchain technology to ensure their rights
                and earnings are protected.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Technological Innovation:
                </span>
                By leveraging the latest blockchain technology, XYZ Crypto
                Universe delivers secure and efficient solutions, ensuring that
                every transaction, contract, and interaction within the
                ecosystem runs smoothly and is protected. This cutting-edge
                technology provides a competitive advantage and ensures the
                platforms sustainability in the long run.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Global Accessibility:
                </span>
                This ecosystem is accessible to users worldwide, making it
                inclusive and universal. With support for multiple languages and
                payment methods, users from all corners of the globe can access
                the services and opportunities offered without geographical
                restrictions.
              </li>
            </ul>
          </div>
        )}
        {selectedBox === 3 && (
          <div  key={selectedBox} >
            <h2 id="FILM" className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] font-bold py-5">
              FILM
            </h2>
            <p>
              PT BEKI also provides specialized services in the Film industry,
              covering production, distribution, and copyright protection for
              film works. These services are designed to support creators and
              professionals in the film industry, from idea development to
              global distribution, while ensuring that intellectual property
              (IP) rights for each film are well-protected.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              1. Film Production
            </div>
            <p className="px-2 2xl:px-0">
              PT BEKI is directly involved in the film production process,
              whether it is for feature films, TV series, or short films. Our
              production services include:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Content Development:
                </span>{" "}
                We assist in scriptwriting, theme selection, and story ideation
                to form the foundation of the film project.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Production and Direction:
                </span>{" "}
                We offer complete services from pre-production, production, to
                post-production, including the management of production teams,
                equipment, and resources needed to create high-quality works.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Collaboration with Creators:
                </span>{" "}
                We work closely with directors, producers, and other industry
                professionals to create films that are both high in quality and
                creativity.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              2. Film Distribution
            </div>
            <p className="px-2 2xl:px-0">
              PT BEKI facilitates film distribution across various platforms,
              including cinemas, TV channels, and digital platforms. Our
              distribution services include:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Cinemas Distribution:
                </span>{" "}
                We provide access to popular streaming platforms such as
                YouTube, Netflix, and local streaming platforms to reach a
                broader audience.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Cinemas Distribution:
                </span>{" "}
                We assist PT BEKI-produced films to be shown in cinemas both
                domestically and internationally.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Film Festivals:
                </span>{" "}
                We support submitting films to national and international film
                festivals to increase exposure and provide opportunities for the
                films to win awards.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              3. Intellectual Property (IP) Protection
            </div>
            <p className="px-2 2xl:px-0">
              PT BEKI ensures that every film produced is legally protected,
              both nationally and internationally, through our copyright
              protection services. This includes:
            </p>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Copyright Registration:
                </span>{" "}
                We assist creators with registering copyrights for their films,
                ensuring that the works are legally protected in Indonesia and
                globally.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Distribution Protection:
                </span>{" "}
                We draft the necessary agreements and contracts related to film
                distribution, ensuring that intellectual property rights are
                safeguarded throughout the distribution process.
              </li>
            </ul>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              4. Web3-based Film Content Development
            </div>
            <p className="px-2 2xl:px-0">
              As part of PT BEKI&apos;s commitment to adopting the latest
              technology, we are also developing film content integrated with
              Web3 technology. This allows the distribution and purchase of film
              copyrights through NFTs (Non-Fungible Tokens), creating new
              opportunities in the film industry with a more transparent and
              decentralized ecosystem. This technology offers a new way to build
              a more secure and fair environment within the film industry.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages of PT BEKI Film Services:
            </div>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Comprehensive Services:
                </span>{" "}
                Covering the entire film production cycle, from idea
                development, content creation, to global distribution.
              </li>
              <li>
                <span className="font-bold text-secondary">IP Protection:</span>{" "}
                Ensuring valid copyright and distribution, reducing the risk of
                intellectual property infringements.
              </li>
              <li>
                <span className="font-bold text-secondary">Global Access:</span>{" "}
                Facilitating film distribution to international audiences
                through various digital platforms and film festivals.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Creative Collaboration:
                </span>{" "}
                Opening up opportunities for collaboration with top
                professionals in the film industry to create high-quality works.
              </li>
            </ul>
          </div>
        )}
        {selectedBox === 2 && (
          <div
            
            key={selectedBox}
            
            className="relative w-full"
          >
            <h2 id="Podcast" className="text-secondary text-[28px] md:text-[48px] lg:text-[64px] py-5 font-bold">
              Podcast
            </h2>
            <p className="text-white mb-10">
              Through its Legal IP & Community pillar, PT BEKI introduces the
              Podcast service as a platform connecting various communities
              across Indonesia. This podcast program covers a wide range of
              topics supported by local communities, providing a space for
              audiences to discuss and share insights.
            </p>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 my-10"></div>

            {/* Kontainer untuk kotak-kotak YouTube */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 md:px-10">
              {[
                 {
                  title: "XYZONE Update",
                  video:
                    "https://www.youtube.com/embed/aPkhhDpZ74c?si=tmRzGa5J4o2Z4TwY8",
                  description:
                    "The latest news on technology, culture, and creative communities relevant to Generations X, Y, and Z, offering insights into tech developments and new trends.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dchBCnXQXmS-wDp6fKo2hd9Y&si=4bY2QsA_t2vEhpVu",
                },
                {
                  title: "LBJ 24 Viral",
                  video:
                    "https://www.youtube.com/embed/mzNWohCo3P8?si=gj6zg6DJCfXst7nR",
                  description:
                    "Exploring viral phenomena on social media, providing in-depth analysis and behind-the-scenes stories of the latest trending topics.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dch8kCEgfz1NZyg-kRghtuur&si=DNCdM-k51pPfggCR",
                },
                {
                  title: "Jalan Tengah",
                  video:
                    "https://www.youtube.com/embed/F5wWOARZ1Fw?si=zxii4LXnMSKYWsG",
                  description:
                    "A program that discusses social and political issues from a neutral standpoint, fostering balanced and constructive dialogue to promote mutual understanding.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dcjQ5TqkRBviEw1m40lOXyCb&si=biyAHSYIYkFmNwxQ", // Tambahkan link eksternal
                },
                {
                  title: "Runway Gosip",
                  video:
                    "https://www.youtube.com/embed/sFeYi_BS67A?si=JVK0ia3ntu2-uqYK",
                  description:
                    "A program diving into the latest trends in fashion and celebrity lifestyle, including behind-the-scenes stories and exclusive interviews with designers and fashion icons.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dcgxKjoD1Z5-1F5Vu6rb63qT&si=53wWOrb-GV71dDSf",
                },
                {
                  title: "Raptile Ranger",
                  video:
                    "https://www.youtube.com/embed/axh3kM0pF40?si=t9aMr24dcWMYUgTo",
                  description:
                    "An educational program for reptile enthusiasts, covering pet care, habitats, and the uniqueness of these exotic pets, offering insights into the world of reptiles.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dciOVCC_22ZN3EU8SQmL0ack&si=gE5hxjZLEsn0Kg1b",
                },
                {
                  title: "Banzai Hub",
                  video:
                    "https://www.youtube.com/embed/i1rd9ra5jWM?si=B8MP_lpL6as4JGZG",
                  description:
                    "A spotlight on the cosplay community and Japanese culture, featuring interviews with cosplayers, pop culture discussions, and Japanese-themed events that attract fans.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dch3ctkclyBlsm9Y3hErdhiN&si=CxBBZZuTs-ZBqEqr",
                },
                {
                  title: "CIV POD",
                  video:
                    "https://www.youtube.com/embed/vMf7_m3QKHA?si=Tg3ExjpW52QNemKg",
                  description:
                    "A podcast educating listeners about the care and habitat of civets, as well as unique stories from civet owners and enthusiasts in Indonesia.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dcg7Tayhy_n2C6NNQLInsUPN&si=ClAok81ROJTeXNCj",
                },
                {
                  title: "C. Talk",
                  video:
                    "https://www.youtube.com/embed/Go0Mak0XIn8?si=111fqFL-L5_3c0x8",
                  description:
                    "In-depth discussions about careers, business, and inspiring journeys from professionals across various fields, offering valuable insights for listeners aiming to develop themselves.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dcg08RXmZ8S3vZqCa_-JIjAR&si=V2ZSg52Kimzr5TqF",
                },
                {
                  title: "Santri Santuy",
                  video:
                    "https://www.youtube.com/embed/FGdaURXtSWw?si=iAUYHJdK0vVlVuGY",
                  description:
                    "A program featuring light and inspiring stories from the world of santri, discussing pesantren life, traditions, and their perspectives on current issues.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dchxdCWhdryUYOrPfvfmvbOH&si=iJXWqMom8Vjzkw-2",
                },
                {
                  title: "Dari Party Ke Hati",
                  video:
                    "https://www.youtube.com/embed/5HPi5-XX868?si=1k4Y7xiNdCTyFYwP",
                  description:
                    "Presenting unique stories from the entertainment world, from vibrant parties to inspiring emotional tales.",
                  link: "https://youtube.com/playlist?list=PL2lqFNqw5dcg7-UAGPvVv8K680_-wEEyi&si=5jzCWwKAcugcxJay",
                },
               
              ].map((podcast, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Judul dengan Link */}
                  <a
                    href={podcast.link} // Tambahkan link ke judul
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-[22px] font-bold py-4 px-4 hover:text-hover"
                  >
                    {podcast.title}
                  </a>

                  {/* Video Embed */}
                  <div
                    className="relative w-full h-0 cursor-pointer"
                    style={{ paddingBottom: "56.25%" }}
                    onClick={() => setSelectedVideo(podcast)}
                  >
                    <iframe
                      src={podcast.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      title={podcast.title}
                    ></iframe>
                  </div>

                  {/* Keterangan */}
                  <p className="text-white text-sm md:text-[16px] font-light px-4 py-4 text-center">
                    {podcast.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedBox === 4 && (
          <div  key={selectedBox} >
            <h2 id="Community" className=" text-secondary text-[28px] md:text-[48px] lg:text-[64px] font-bold py-5">
              Community
            </h2>
            <p>
              PT BEKI’s Community services focus on the development and
              management of digital communities within the crypto world, with
              two main communities, CryptoHell and Airdrophans. Both communities
              use Telegram as their primary platform for interaction,
              information sharing, and providing support for crypto enthusiasts.
              These services are designed to foster participation in the broader
              crypto ecosystem, offering opportunities for learning and earning.
            </p>

            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>
            <p className="text-secondary text-[26px]  2xl:text-[28px] font-bold mt-10 ">
              Main Services
            </p>
            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              1. CryptoHell (Telegram)
            </div>
            <p className="px-2 2xl:px-0">
              CryptoHell is a Telegram community dedicated to crypto enthusiasts
              and practitioners, especially those interested in tokens and
              innovations within blockchain technology.
            </p>
            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[18px]">
              Key Functions:
            </div>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                Providing up-to-date information about the latest trends, crypto
                projects, and blockchain technology.
              </li>
              <li>
                Serving as a discussion space where members can exchange
                insights, experiences, and knowledge related to crypto
                investments.
              </li>
              <li>
                A hub for sharing tips, strategies, and opportunities in the
                crypto and DeFi (Decentralized Finance) sectors.
              </li>
              <li>
                Offering support to new members in understanding the world of
                cryptocurrency more easily and thoroughly.
              </li>
            </ul>

            <a
              href="https://t.me/loungecryptohell"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold mt-8 italic underline flex items-center gap-2 cursor-custom nav-link"
            >
              Visit CryptoHell Telegram
              <AiOutlineArrowRight className="text-lg font-bold" />
            </a>

            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              2. Airdrophans (Telegram)
            </div>
            <p className="px-2 2xl:px-0">
              Airdrophans is a Telegram community focused on airdrops (free
              token giveaways) within the crypto ecosystem. This community
              provides its members with opportunities to receive tokens from
              various crypto projects through airdrops.
            </p>
            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[18px]">
              Key Functions:
            </div>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                Sharing information about the latest airdrops and how to
                participate in these campaigns.
              </li>
              <li>
                Offering guides and tips to help members maximize their earnings
                through airdrops.
              </li>
              <li>
                A space for members to share experiences and strategies for
                participating in airdrops.
              </li>
              <li>
                Introducing members to new crypto projects that offer airdrops
                as part of their promotion efforts.
              </li>
            </ul>
            <a
              href="https://t.me/airdrophans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold mt-8 italic underline flex items-center gap-2 cursor-custom nav-link"
            >
              Visit Airdrophans Telegram
              <AiOutlineArrowRight className="text-lg font-bold" />
            </a>
            <div className="w-full flex justify-center items-center h-[2px] bg-gray-500 mt-10"></div>

            <div className="2xl:px-0 px-2 py-2 mt-5 marker:text-hover flex flex-col gap-4 font-bold text-secondary text-[24px]">
              Advantages of PT BEKI Community Services:
            </div>

            <ul className="list-disc list-outside 2xl:px-10 px-5 py-5 marker:text-hover flex flex-col gap-4">
              <li>
                <span className="font-bold text-secondary">
                  Discussion and Collaboration Hub:
                </span>{" "}
                Providing a platform for members to discuss and collaborate in
                the crypto world, enriching their knowledge and building
                networks.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Latest Information Updates:
                </span>{" "}
                Offering the latest information and news about cryptocurrency
                and airdrop opportunities, keeping members informed on
                developments in the crypto space.
              </li>
              <li>
                <span className="font-bold text-secondary">
                  Participation Opportunities:
                </span>{" "}
                Giving members the chance to participate in various airdrops and
                earn free tokens as part of crypto project promotions.
              </li>
              <li>
                <span className="font-bold text-secondary">Global Access:</span>{" "}
                Using Telegram, these communities are accessible to crypto users
                worldwide, enabling members to connect with fellow crypto
                enthusiasts from various countries.
              </li>
            </ul>

            <p className="px-2 2xl:px-0">
              With CryptoHell and Airdrophans, PT BEKI strengthens its role
              within the crypto ecosystem, providing opportunities for community
              members to learn, engage in discussions, and earn rewards in the
              world of cryptocurrency.
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

export default Legal;
