import React from "react";
import Menubar from "../components/Menubar";
import Hero from "./Hero";
import Carousel from "../components/Carousel";

import hero1 from "../assets/home/hero-bg.png";
import hero2 from "../assets/home/hero-bgg2.png";
import hero3 from "../assets/home/hero-bg3.png";

const heroContent = [
  {
    heroImage: hero1,
    tagLine: "28 June to 10 July",
    heading: "STUDY ABROAD EXPO 2024",
    description:
      "Explore the world of opportunities with free entry, individual consultation and learn about new scholarships. HYDERABAD - KARACHI - LAHORE - ISLAMABAD - RAWALPINDI - SIALKOT - JHELUM - GUJRAT - PESHAWAR - FAISALABAD - MULTAN - BAHAWALPUR - SARGODHA - GUJRANWALA",
    btnText: "View Details",
  },
  {
    heroImage: hero2,
    tagLine: "Pakistan's largest education consultants",
    heading: "MAKE YOUR STUDY ABROAD JOURNEY EASY WITH US!",
    description:
      "Get in touch with us for expert advise regarding your academic opportunities where an unmatched team of experts is ready to help you throughout your process.",
    btnText: "Contach Us",
  },
  {
    heroImage: hero3,
    tagLine: "Explore World's Largest Course Search Portal",
    heading: "TAKE YOUR FUTURE IN YOUR OWN HANDS!",
    description:
      "Discover a course through the Times Course Finder and find the destination that fulfils your needs without the hassle of explaining what you want. With 60+ popular study destinations to choose from.",
    btnText: "Discover Courses",
  },
];

const heroImages = [hero1, hero2, hero3];

const Home = () => {
  return (
    <>
      <Carousel>
        {heroContent.map((item, index) => {
          return (
            // <img key={index} src={image} alt="here is image" />
            // how to make div overflow horizontally in flexbox
            // https://stackoverflow.com/questions/48239239/css-flexbox-horizontal-overflow
            <div
              key={index}
              style={{
                background: `url(${item.heroImage})`,
                height: "500px",
                height: "91vh",
                flex: "0 0 100%",
              }}
              className="w-[100%] flex items-center pl-[80px]"
            >
              <div className="w-[60%] text-white flex flex-col justify-between items-start gap-5">
                <p className="font-[500] text-[22px] border-l-4 border-[#fd4a36] pl-[10px] pt-0 pb-[4px] font-serif ">
                  {item.tagLine}
                </p>
                <h2 className="font-bold text-[45px] font-serif">
                  {item.heading}
                </h2>
                <p className="text-[20px] mb-[18px] font-[poppins]">
                  {item.description}
                </p>
                <button className="bg-[#fd4a36] w-[200px] py-[15px] rounded-[30px] font-[600]">
                  {item.btnText} ----
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default Home;
