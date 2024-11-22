"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Succes = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, // Durasi animasi (ms)
          easing: "ease-out", // Gaya easing
          once: true, // Animasi hanya terjadi sekali
        });
      }, []);

    
  return (
    <div data-aos="fade-up" className="Success-sect overflow-hidden Our-Success w-full 2xl:h-full flex  flex-col justify-start items-start 2xl:px-20 px-5  md:py-[100px] py-[20px] bg-gradient-to-b from-gray-950 to-gray-800 ">
         <div className="content  flex flex-col  2xl:justify-start 2xl:items-start xl:justify-center xl:items-center justify-start items-start">
            <p className="w-full 2xl:text-left xl:text-center text-left flex 2xl:justify-start 2xl:items-start justify-start xl:justify-center xl:items-center 2xl:text-[56px] md:text-[58px] text-[36px] text-secondary font-bold 2xl:mt-10 mt-10">
            Our Success Story
            </p>
            <div className="w-[100px] h-[5px] bg-hover rounded-full my-5"></div>
           

            </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-1 md:px-10 py-10">
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
              
               
              ].map((success, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Judul dengan Link */}
                  <a
                    href={success.link} // Tambahkan link ke judul
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-[22px] font-bold py-4 px-4 hover:text-hover"
                  >
                    {success.title}
                  </a>

                  {/* Video Embed */}
                  <div
                    className="relative w-full h-0 cursor-pointer"
                    style={{ paddingBottom: "56.25%" }}
                    onClick={() => setSelectedVideo(success)}
                  >
                    <iframe
                      src={success.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      title={success.title}
                    ></iframe>
                  </div>

                  {/* Keterangan */}
                  <p className="text-white text-sm md:text-[16px] font-light px-4 py-4 text-center">
                    {success.description}
                  </p>
                </div>
              ))}
            </div>
             
            
            </div>
           
    
  )
}

export default Succes