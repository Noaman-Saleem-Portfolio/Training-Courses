import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const DestinationSlider = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  {
    console.log(slides.length);
    console.log(window.screen.width);

    const [curr, setCurr] = useState(0);
    const [numOfSlides, setNumOfSlides] = useState(2);
    const [multiplyFactor, setMultiplyFactor] = useState(400);

    //infine rerenders
    // if (window.screen.width > 950) {
    //   setNumOfSlides(2);
    //   setMultiplyFactor(400);
    // } else if (window.screen.width > 650) {
    //   setNumOfSlides(3);
    //   setMultiplyFactor(300);
    // } else {
    //   setNumOfSlides(4);
    //   setMultiplyFactor(200);
    // }

    const prev = () => {
      // setCurr((curr) => (curr === 0 ? numOfSlides : curr - 1));
      if (window.screen.width > 950) {
        setNumOfSlides(2);
        setMultiplyFactor(400);
        setCurr((curr) => (curr === 0 ? numOfSlides : curr - 1));
      } else if (window.screen.width > 650) {
        setNumOfSlides(3);
        setMultiplyFactor(300);
        setCurr((curr) => (curr === 0 ? numOfSlides : curr - 1));
      } else {
        setNumOfSlides(4);
        setMultiplyFactor(200);
        setCurr((curr) => (curr === 0 ? numOfSlides : curr - 1));
      }
    };

    const next = () => {
      // setCurr((curr) => (curr === numOfSlides ? 0 : curr + 1));
      if (window.screen.width > 950) {
        setNumOfSlides(2);
        setMultiplyFactor(400);
        setCurr((curr) => (curr === numOfSlides ? 0 : curr + 1));
      } else if (window.screen.width > 650) {
        setNumOfSlides(3);
        setMultiplyFactor(300);
        setCurr((curr) => (curr === numOfSlides ? 0 : curr + 1));
      } else {
        setNumOfSlides(4);
        setMultiplyFactor(200);
        setCurr((curr) => (curr === numOfSlides ? 0 : curr + 1));
      }
    };

    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, []);
    return (
      <div className="overflow-hidden relative pt-[60px] pb-[90px] ">
        {/* {slides[1]} */}
        <div
          id="destinationContainer"
          className=" flex transition-transform ease-out duration-500  w-[25%] "
          style={{ transform: `translateX(-${curr * multiplyFactor}%)` }}
        >
          {slides}
        </div>
        <div className="absolute bottom-[0px] left-[50%] translate-x-[-50%] flex items-center justify-center p-4 gap-[10px]">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow  text-gray-800 bg-[#b6b5b5]  hover:bg-[#fd4a36]"
          >
            {/* <ChevronLeft size={40} /> */}
            <FaArrowLeftLong className="text-[#fd4a36] text-[30px] hover:text-white" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow  text-gray-800 bg-[#b6b5b5]  hover:bg-[#fd4a36]"
          >
            {/* <ChevronRight size={40} /> */}
            <FaArrowRightLong className="text-[#fd4a36] text-[30px] hover:text-white" />
          </button>
        </div>

        <div className="absolute  right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => {
              if (i >= slides.length / 4) {
                return;
              }
              return (
                <div
                  key={i}
                  className={`
              transition-all w-3 h-3 bg-white rounded-full mb-1
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default DestinationSlider;
