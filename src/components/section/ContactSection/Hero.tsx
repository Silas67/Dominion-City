"use client";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/collage.jpg")',
        backgroundSize: "cover",
      }}
      className="relative w-full flex items-center justify-center h-[30vh] max-sm:h-[40vh] max-sm:flex-col"
    >
      <div className="w-full text-center z-20">
        <h1 className="text-6xl text-white font-semibold font-type">
          {" "}
          Contact Us{" "}
        </h1>
      </div>
      <div className="absolute w-full h-full bg-black bg-opacity-80 z-10"></div>
    </div>
  );
};

export default Hero;
