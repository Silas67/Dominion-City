import React from "react";
import { motion } from "framer-motion";

const Newsletters = () => {
  return (
    <div className="w-full flexcent text-[#232424] px-[100px] max-sm:px-0 pb-24">
      <div className="w-full max-sm:gap-6 flex items-center justify-between max-sm:flex-col gap-8 px-[50px] max-sm:px-4">
        <div className=" h-full flex items-center justify-center">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl font-semibold leading-12  font-heading"
          >
            Want to stay Updated?{" "}
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              className="text-sm block font-light italic text-amber-500 max-sm:text-[12px]"
            >
              Join Our Mailing list
            </motion.span>
          </motion.h1>
        </div>

        <div className="flex-1 h-full flex items-center justify-center border-[#073029] max-sm:w-full flex-col max-sm:flex-col relative">
          <div className="w-full flex justify-between items-center ">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              className="w-[100%] h-[3rem] border rounded-lg outline-[#bebebe] bg-[#ffffffe0] px-[20px] text-black relative sub max-sm:rounded-2xl"
            />
          </div>
          <button className=" font-bold h-[3rem] rounded-r-xl sm:w-[7rem] md:text-[13px] max-sm:w-[7rem] my-4  text-secondary hover:border-2 hover:bg-secondary hover:text-white transition-colors right-0 absolute">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
