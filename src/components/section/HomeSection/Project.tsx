import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

import img1 from "@/components/assets/Images/Project.jpg";
import Dropdown from "./Dropdown";
import Motion from "@/hooks/Motion";

const Project = () => {
  return (
    <div className="relative w-full mt-3 overflow-hidden md:px-[100px] py-24  px-8 rounded-sm">
      <Motion className="flex justify-center z-30 relative text-primary flex-col items-center">
        {/* Title */}
        <h1 className="text-5xl font-semibold font-heading uppercase text-center max-sm:text-3xl">
          The{" "}
          <span className="bg-primary px-3 text-white font-bold font-serif">
            1,000
          </span>{" "}
          Church Building Project
        </h1>

        {/* Form + Image section */}
        <div className="flex items-center justify-between my-12 gap-8 lg:flex-row flex-col-reverse">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-4 rounded-xl mx-[10px] border basis-1/2">
            <form className="space-y-4">
              <Dropdown Con={true} Bg={false} />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full p-3 border rounded-md bg-transparent placeholder:text-primary"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full p-3 border rounded-md bg-transparent placeholder:text-priamry"
              />
              <Dropdown Con={false} Bg={false} />
              <button type="submit" className="w-full flexcent">
                <p className="w-[200px] bg-primary text-white p-3 rounded-[12px] hover:text-primary hover:bg-white border border-primary transition-all duration-500 font-semibold hover:scale-105">
                  Save
                </p>
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="basis-1/2 text-center">
            <div
              className="relative text-center overflow-hidden rounded-md border border-primary/70
            "
            >
              <Image src={img1} alt="Church Building Project" />
              <div className="group absolute w-full h-full inset-0 bg-black/10 hover:bg-black/60 z-10 transition-all duration-500 flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group-hover:block hidden transition-discrete duration-200"
                >
                  <button className="primary-button flex flex-row gap-1 justify-center items-center hover:scale-105 max-sm:hidden max-md:flex text-[12px]">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>
            <div className="italic text-[13px] underline underline-offset-2 p-2 mt-2">
              <Link href="/">Click to view projects</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[70%] border my-6" />

        {/* Account Details + Contact */}
        <div className="flex items-center justify-evenly flex-col">
          <div className="p-4 basis-1/2 text-center">
            <h1 className="font-semibold text-2xl pb-4">Account Numbers</h1>

            <div className="grid grid-cols-3 items-center max-w-4xl gap-4">
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">NGN:</span> 0283265571
              </p>
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">USD:</span> 0283265588
              </p>
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">GBP:</span> 0283265595
              </p>
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">EUR:</span> 0283266389
              </p>
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">SORT CODE:</span> 058152405
              </p>
              <p className="text-sm grid grid-cols-subgrid">
                <span className="font-bold">SWIFT CODE:</span> GTBINGLA
              </p>
            </div>
            <div className="flex gap-8 flex-wrap justify-center text-sm mt-4">
              <p>
                <span className="font-bold whitespace-nowrap">Name:</span> 1000
                CHURCH PROJECT
              </p>
              <p className="whitespace-nowrap">
                <span className="font-bold">Bank:</span> GTBANK
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-4 flex items-center flex-col gap-2">
            <p>For more information, contact us @</p>
            <div className="flex items-center flex-col-reverse text-sm gap-1">
              <div className="flex items-center ">
                <BiPhone className="text-xl mr-1" />
                <div className="flex gap-1">
                  <span>(+234)-8035508230, </span>
                  <span>(+234)-8034954566</span>
                </div>
              </div>
              <p className="flex items-center">
                <CgMail className="text-xl mr-1" />
                projects@dominioncity.cc
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default Project;
