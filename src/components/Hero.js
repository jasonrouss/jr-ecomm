import React from "react";
import hero from "./hero.png";
const Hero = () => {
  return (
    <div className="lg:mb-4 mb-2">
      <img src={hero} alt="Hero banner" className="w-screen " />
    </div>
  );
};

export default Hero;
