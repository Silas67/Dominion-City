import React from "react";
import Image from "next/image";
import img from "@/components/assets/Images/PP1.png";

const Ministry = () => {
  return (
    <div className="w-full entbody">
      {" "}
      <div className="w-full flex items-center justify-center p-12 flex-col text-primary gap-8">
        <h1 className="text-[4rem] w-[70%] leading-[1] text-center font-bold font-type max-sm:text-[2rem]">
          The Church
        </h1>
        <div className="flex items-start justify-evenly w-full pt-6 max-sm:flex-col md:flex-col lg:flex-row-reverse">
          <div>
            <div className="sm:w-[450px] sm:h-[450px] overflow-hidden Pmask flex items-center justify-center ">
              <Image
                src={img}
                alt="/"
                className="object-cover w-full h-full object-top"
              />
            </div>
          </div>

          <div className="text-center max-sm:text-sm lg:w-1/2 text-[#080c28] max-sm:w-full md:w-full">
            <p className="first-letter:text-4xl">
              {" "}
              Dr. David Ogbueli is the founder of the New Covenant Family
              Ministries and the Senior Pastor of Dominion City, International.
              He is also the President of the Dominion Leadership Institute, and
              a Senior Facilitator in the Institute of National Transformation.
            </p>
            <p>
              Dr. David Ogbueli is a minister of the Gospel, and an icon of
              transformational leadership. His passion for Personal
              Transformation and National Transformation has produced various
              initiatives and ministries causing a stir among youth,
              governments, corporate institutions, the media and other
              stakeholders both in Africa and globally. He is a Management and
              Government Consultant who speaks nationally and internationally in
              organizations, government houses, embassies and churches. He is a
              widely read author and a social reformer.
            </p>
            <p>
              Dr David Ogbueli is married to Pastor Sarah Ogbueli and they have
              four children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministry;
