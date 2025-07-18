import React from "react";
import Image from "next/image";
import img from "@/components/assets/Images/Np1.png";
import { FaHandsPraying } from "react-icons/fa6";

const AboutChurch = () => {
  return (
    <div className="w-full z-30 bg-primary entbody">
      <div className="w-full flex justify-evenly items-center entbody2 p-12 max-sm:flex-col -z-20 gap-12">
        <div className="shadow-xl card z-10">
          <div className="w-12 h-12 bg-white rounded-full m-2 flex justify-center items-center">
            <FaHandsPraying className="text-primary text-3xl" />
          </div>
          <div className="text-2xl font-type">Our Core Values</div>
          <div className="text-neutral-200 font-sans pt-2">
            Explore the values that embody the vision of Dominion City Church.
            Our values reflect our mission to transform the total man so we can
            impact our communities.
          </div>
        </div>
        <div className="shadow-xl card z-10">
          <div className="w-12 h-12 bg-white rounded-full m-2 flex justify-center items-center">
            <FaHandsPraying className="text-primary text-3xl" />
          </div>
          <div className="text-2xl font-type">Our Beliefs</div>
          <div className="text-neutral-200 text-[15px] font-sans">
            Discover how we view God, Jesus, the Bible, man, and many
            significant aspects of our faith. Our beliefs are shaped by biblical
            truths and our decisions as a church are guided by Scripture.
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center p-8 flex-col text-primary gap-8">
        <h1 className="text-[4rem] w-[70%] leading-[1] text-center transform scale-y-[1.14] font-semibold font-type max-sm:text-[2rem] text-[#13154f75]">
          Discover God&apos;s <span className="text-[#e4c526c1]">Purpose</span>{" "}
          For Your Life
        </h1>
        <div className="flex items-center justify-evenly w-full pt-2 max-sm:flex-col md:flex-col lg:flex-row">
          <div className="">
            <div className="w-[300px] h-[300px] rounded-[10px] overflow-hidden ">
              <Image
                src={img}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="text-center max-sm:text-sm lg:w-1/2 text-[#080c28] max-sm:w-full md:w-full">
            <p className="first-letter:text-2xl text-[#080c28] hover:text-[#000]">
              {" "}
              Dominion City (formerly New Convenant Family Ministries) was begun
              in August of 1998 here in the City Beautiful, Orlando, Florida.
              From our humble beginnings in Dr. Phillips High School, through
              our journey to Hoffner Avenue in Conway, to our current beautiful
              11-acre campus in Longwood, we are a non-denominational family of
              lovers of Christ, whose desire is to see YOU realize your full
              potential in Christ, becoming the true-to-God-you that you are
              intended to be!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChurch;
