import React, { useState } from "react";
import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";
import { Location } from "@/components/constant";
import Link from "next/link";

const ChurchCard = ({
  zone,
  address,
  link,
}: {
  zone: string;
  address: string;
  link: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-72 border border-background flex flex-col items-center rounded-2xl px-6 py-12 
      text-background transition-all ease-in-out duration-500 max-sm:w-44"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      <div className={`${isHovered ? "" : ""}`}>
        <CiLocationOn className="text-[5rem] max-sm:text-4xl" />
      </div>

      <h1 className="uppercase text-3xl font-semibold py-3 max-sm:text-xl">
        {zone}
      </h1>
      <p className="text-sm text-center max-sm:text-[10px]">{address}</p>

      <div
        className={`w-[90%] border mt-5 mb-2 transition-all duration-700 ${
          isHovered ? "translate-y-8 border-gray-300 w-16" : "translate-y-0"
        }`}
      ></div>

      <div
        className={`text-sm flex items-center gap-3 w-full justify-center p-2 transition-all duration-700 ${
          isHovered
            ? "-translate-y-3 text-white font-bold"
            : "translate-y-0 text-gray-300 font-normal"
        }`}
      >
        <Link href={link} className="cursor-pointer">
          View Map
        </Link>
        <CiLocationArrow1 />
      </div>
    </div>
  );
};

const Churches = () => {
  return (
    <div className="w-full bg-hero p-8 items-center">
      <div className="w-full text-center mb-12">
        <h1 className="text-white text-5xl font-semibold uppercase">
          Our Branches
        </h1>
        <p className="text-gray-200 text-sm p-2 italic tracking-widest">
          Find A Dominion City Near You
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-8 flex-wrap my-6 max-sm:grid max-sm:grid-cols-2">
        {Location.map((item) => (
          <ChurchCard
            key={item.zone}
            zone={item.zone}
            address={item.address}
            link={item.link}
          />
        ))}
      </div>

      <div className="w-full text-center mt-6">
        <Link
          href={"/"}
          className="text-sm hover:text-lg text-background transition-all duration-500 cursor-pointer"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Churches;
