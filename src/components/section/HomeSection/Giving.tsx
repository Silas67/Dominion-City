import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHandsHolding } from "react-icons/fa6";
import { GivingCard, OnlineGiving } from "@/components/constant";
import { motion } from "framer-motion";

const Giving = ({ Bg }: { Bg: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={` w-full md:px-[100px] py-24 px-8 space-y-8 ${Bg ? "bg-primary text-white" : ""}`}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full text-center flexcent flex-col"
      >
        <h1 className="md:text-6xl font-semibold uppercase font-heading mb-3 text-4xl">
          Online Giving
        </h1>
        <p
          className={`md:text-md tracking-wide text-neutral-300 max-sm:text-sm max-w-xl`}
        >
          Honor Pastor David: Support Partnerships & Kingdom Projects
        </p>
      </motion.div>

      <div className="w-full flex items-center justify-center flex-col">
        {/* Givng */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden w-full sm:flex items-center justify-center max-sm:flex-wrap "
        >
          {OnlineGiving.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center flex-col "
            >
              <div className="relative flex items-center justify-center lg:w-[300px] lg:h-[300px] sm:w-[230px] sm:h-[230px] overflow-hidden mask-container group">
                <Image
                  src={item.img}
                  alt="Image"
                  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute w-full h-full bg-black/60 flex  justify-center flex-col group-hover:bg-black/70 transition-all duration-500">
                  <motion.div
                    initial={{ y: 20, scale: 1.1, opacity: 0 }}
                    whileInView={{ y: 0, scale: 1, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.7 }}
                    viewport={{ once: true }}
                    className="w-full h-full flex items-center justify-center flex-col"
                  >
                    <div className="lg:text-4xl sm:text-3xl text-white">
                      {item.icon}
                    </div>
                    <div className="lg:text-2xl sm:text-xl text-white">
                      {item.heading}
                    </div>
                    <Link href={"/"}>
                      <button className="w-fit px-4 h-[40px]  text-sm bg-secondary text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-500 ease-in-out my-2 hover:scale-105">
                        Give
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="-mt-12">
                <FaHandsHolding
                  className={`text-[7rem] ${
                    Bg ? "text-white" : "text-primary"
                  }`}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <div
          ref={scrollRef}
          className="w-full gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth flex  sm:hidden  "
        >
          {OnlineGiving.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center flex-col snap-center flex-shrink-0"
            >
              <div className="relative w-[300px] h-[300px] overflow-hidden mask-container">
                <Image
                  src={item.img}
                  alt="Image"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center flex-col">
                  <div className="text-4xl text-white">{item.icon}</div>
                  <div className="text-2xl text-white p-2">{item.heading}</div>
                  <Link href={"/"} passHref>
                    <button className="w-fit px-4 h-[40px] font-semibold border border-primary bg-secondary text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-500">
                      Give
                    </button>
                  </Link>
                </div>
              </div>
              <div className="-mt-12">
                <FaHandsHolding className="text-[7rem]" />
              </div>
            </div>
          ))}
        </div>

        <div className="min-w-[100px]  flexbet mt-4 px-[8px]">
          <button onClick={() => scroll("left")}>&#8592;</button>
          <button onClick={() => scroll("right")}>&#8594;</button>
        </div>

        {/* Acocunts */}
        <div className="mt-16 flexcent flex-col gap-8">
          <h1 className="text-[16px] max-sm:text-[16px] text-center px-4">
            Pay your <span className="text-[#e3c632]">Firstfruits</span>,
            Offerings, Tithes, Vows & Donations using any of the meduim shown
            below
          </h1>
          <div className="w-full flex items-center justify-center">
            <div className="flex gap-5 max-sm:grid max-sm:grid-cols-1">
              {GivingCard.map((item, index) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.7,
                    delay: 0.3 * index,
                  }}
                  viewport={{ once: true }}
                  key={index}
                  className={`w-[220px] rounded-xl flex flex-col p-4 gap-2  ${
                    Bg ? "bg-white" : "bg-blue-950 text-white"
                  }`}
                >
                  <div className="w-full flex justify-center flex-col items-center">
                    <div
                      className={`p-4 bg-transparent mb-2 rounded-full ${
                        Bg ? "border-none" : "border-white border"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h1
                      className={`font-bold text-primary ${
                        Bg ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h1>
                  </div>
                  <div
                    className={`border  ${
                      Bg ? "border-primary" : "border-white"
                    }`}
                  ></div>
                  <div
                    className={`text-[#0a0c2f] text-center ${
                      Bg ? "text-[#0a0c2f]" : "text-white"
                    }`}
                  >
                    <h1 className="text-sm">{item.subtitle}</h1>
                    <h1 className="text-[#932121] font-semibold text-[12px]">
                      {item.sec}
                    </h1>
                    <h1 className="text-sm">{item.opt}</h1>
                  </div>

                  <div className="w-full text-center">
                    <Link href={"/"}>
                      <button className="w-fit px-4 h-[40px] font-semibold font-heading text-sm bg-secondary text-white rounded-xl hover:bg-white hover:text-primary transition-all duration-500 ease-in-out hover:scale-105">
                        Give
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;
