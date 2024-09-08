import React from "react";
import Carousel from "../components/Carousel";
import DestinationSlider from "../components/DestinationSlider";
import { FaArrowRightLong } from "react-icons/fa6";
import ServicesSlider from "../components/ServicesSlider";
import { Link } from "react-router-dom";
import { servicesSliderData } from "../data";

import { destinationSliderData } from "../data";
import { heroContent } from "../data";

// console.log(servicesSliderData);

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
                // height: "500px",
                // height: "91vh",
                flex: "0 0 100%",
              }}
              className="herodiv flex items-center pl-[80px] h-[91vh]"
            >
              <div className="heroContent w-[60%] text-white flex flex-col  items-start gap-5">
                <p className="tagLine font-[500] text-[22px] border-l-4 border-[#fd4a36] pl-[10px] pt-0 pb-[4px] font-serif ">
                  {item.tagLine}
                </p>
                <h2 className="heroHeading font-bold text-[45px] font-serif">
                  {item.heading}
                </h2>
                <p className="heroDesc text-[20px] mb-[18px] font-[poppins]">
                  {item.description}
                </p>
                <button className="bg-[#fd4a36] w-[200px] py-[15px] rounded-[30px] font-[600]">
                  {item.btnText}{" "}
                  <FaArrowRightLong className="inline-block ml-1" />
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div className="studyDestination">
        <div className="textContent flex justify-between pt-16 px-16">
          <h2 className="text-4xl font-[600]">
            Choose from the top study destinations.
          </h2>
          <p className="w-[70%] text-[20px]">
            When it comes to studying abroad, there are several countries giving
            international student great opportunities of higher education and
            becoming part of their international community. See which country
            suits you best.
          </p>
        </div>
        <DestinationSlider>
          {destinationSliderData.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  flex: "0 0 100%",
                }}
                className="flex flex-col items-center"
              >
                <img
                  src={item.image}
                  className="w-[70%] mb-[15px] rounded-[50px] hover:scale-[1.08]"
                  alt=""
                />
                <Link className="border border-[#fd4a36] py-[10px] px-[30px] rounded-[20px]">
                  <button>{item.country}</button>
                </Link>
              </div>
            );
          })}
        </DestinationSlider>
      </div>

      <div className="services">
        <div className="title flex justify-center">
          <h2 className="text-4xl font-[600] text-center w-[40%]">
            Our Business & Financial Consulting Services
          </h2>
        </div>
        <ServicesSlider>
          {servicesSliderData.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  flex: "0 0 100%",
                }}
                className={`p-16 flex flex-col items-center gap-4 bg-[#071327] text-white mr-[55px] ${
                  index === 0 ? "" : ""
                }`}
              >
                {item.logo}
                <h3 className="text-[20px] text-center font-[600]">
                  {item.title}
                </h3>
                <p className="text-center">{item.description}</p>
              </div>
            );
          })}
        </ServicesSlider>
      </div>
    </>
  );
};

export default Home;
