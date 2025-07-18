import { motion } from "framer-motion";
import React from "react";
import GitForm from "./GitForm";

const Getintouch = () => {
  return (
    <div>
      <section className="w-full flex items-center justify-center flex-col ">
        <div className="w-full flex flex-col items-center my-10">
          <div className="w-full p-8 text-center">
            <h1 className=" text-6xl text-black font-bold font-sans">
              Have A Message?
            </h1>
            <p className=" p-2 text-xl text-gray-500 font-sans italic">
              Reach out to use with your question
            </p>
          </div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full px-8 flex items-center justify-around gap-4 max-sm:flex-col-reverse bg-hero"
        >
          {/* form */}
          <div className="w-full md:w-1/2 p-8 mx-[16px border m-8 rounded-xl">
            <form className="space-y-4 text-[#393939]">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Phone"
                className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
                required
              />
              <GitForm />

              <textarea
                name="message"
                placeholder="How can we help you?"
                className="w-full p-3 border rounded-md focus:ring focus:ring-[#321515]"
                rows={4}
                maxLength={500}
                required
              ></textarea>

              <button className="w-full bg-primary text-white p-3 rounded-md hover:bg-white transition-all duration-500">
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Getintouch;
