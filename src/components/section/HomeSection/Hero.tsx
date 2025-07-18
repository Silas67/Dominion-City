import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex items-start justify-start h-[90vh] bg-hero max-sm:h-[50vh] uppercase py-24 flex-col px-[40px]">
      {/* <div className="text-[0.875rem] text-neutral-300">Welcome to</div> */}
      <div className="text-[8rem] text-transparent bg-clip-text bg-white font-black leading-[0.9] max-sm:text-5xl font-heading">
        Dominion <br />
        City
      </div>
      <div className="text-[12px] text-neutral-300 tracking-widest m-2 max-sm:text-[10px]">
        Rasing leaders that transforms society
      </div>
    </div>
  );
};

export default Hero;
