import React from "react";
import Carousel from "../components/Carousel";
import DestinationSlider from "../components/DestinationSlider";
import { FaArrowRightLong } from "react-icons/fa6";

import { destinationSliderData } from "../data";
import { heroContent } from "../data";
import { Link } from "react-router-dom";

// console.log(destinationSliderData);

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
              className=" flex items-center pl-[80px]"
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
                  {item.btnText}{" "}
                  <FaArrowRightLong className="inline-block ml-1" />
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quas
        omnis eveniet tenetur voluptatibus, beatae animi debitis, totam eius
        minima aut ipsam nam corrupti mollitia nostrum delectus voluptates!
        Autem, esse? Laborum neque ut ducimus! Veritatis dolorem alias eum?
        Doloribus, libero, similique, quasi ullam iste dicta consectetur quam
        deserunt laboriosam alias velit assumenda impedit facere ipsum unde hic
        quaerat obcaecati cupiditate. Necessitatibus veritatis quas dicta
        perspiciatis rem amet. Voluptate eius velit minima eum voluptatum quo
        modi. Iste doloribus iusto sit, delectus, totam nemo laborum assumenda
        qui fuga commodi, quod sunt placeat. Incidunt, doloremque autem.
        Architecto officia porro cumque dicta odit, error fuga commodi harum.
        Neque vel ullam accusamus dignissimos quam sint praesentium distinctio
        optio iure quibusdam, nobis consectetur ab fugit? Tenetur! Doloribus
        itaque fuga commodi culpa asperiores, numquam dolore recusandae maxime
        excepturi natus aspernatur similique voluptas quas animi vitae dolor
        eveniet corrupti autem facere. Dolores odit sapiente consequuntur
        quisquam et architecto.
      </p>
    </>
  );
};

export default Home;
