import React, { useEffect, useState } from "react";
import imageSlide from "../heroData";
import { Button } from "./Button";

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    objectFit: "contain",
    height: "600px",
    backgroundRepeat: "no-repeat",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div className="h-full text-center font-serifDisplay ">
      <div style={bgImageStyle} className=" h-[420px] relative ">
        <div className="flex flex-col items-center justify-center w-full h-full font-montserrat bg-slate-600/60">
          <h1 className="pb-3 text-6xl font-extrabold uppercase max-lg:text-4xl text-green">
            {imageSlide[currentState].title}
          </h1>
          <p className="mt-4 mb-8 text-2xl font-semibold max-lg:text-lg text-light">
            {imageSlide[currentState].body}
          </p>
          <div className="flex justify-center gap-7">
            <Button type="small" to="/signup">
              {" "}
              Sign up{" "}
            </Button>
            <Button type="primary"> Check Classes </Button>
          </div>

          <div className="absolute flex items-center justify-center py-4 bottom-10 ">
            {imageSlide.map((imageSlide, currentState) => (
              <span
                className=" w-[14px] h-[14px] bg-light ml-[10px] rounded-xl cursor-pointer shadow"
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
