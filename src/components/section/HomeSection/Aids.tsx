import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Dropdown from "./Dropdown";

const Aids = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="w-full flexcent md:px-[100px] py-24 flex-col bg-background text-foreground gap-8 px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center "
      >
        <h1 className="font-semibold md:text-5xl font-heading text-3xl mb-4 text-primary max-w-[700px]">
          Have A Prayer Request Or Testimony?
        </h1>
        <p className="text-muted_foreground text-sm">
          {" "}
          Send us a message. Let us pray and rejoice with you
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex items-stretch justify-center gap-5 max-sm:flex-col"
      >
        <div className="w-1/2 max-sm:w-full overflow-hidden rounded-md">
          <Image
            src={"/images/testimony.png"}
            width={100}
            height={100}
            alt="/"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4 bg-primary p-8 rounded-xl  max-sm:p-6">
          <form className="space-y-4">
            <div className="mb-4 text-white flex items-center gap-5">
              <p className="text-sm font-semibold">Select Category: </p>
              <div className="flex gap-4 max-sm:flex-col">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="testimony"
                    className="hidden"
                    onChange={() => setCategory("testimony")}
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white rounded-full flex items-center justify-center ${
                      category === "testimony" ? "bg-white" : ""
                    }`}
                  >
                    {category === "testimony" && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="ml-2 max-sm:text-sm">Testimony</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="prayer"
                    className="hidden"
                    onChange={() => setCategory("prayer")}
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white rounded-full flex items-center justify-center ${
                      category === "prayer" ? "bg-white" : ""
                    }`}
                  >
                    {category === "prayer" && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="ml-2 max-sm:text-sm">Prayer Request</span>
                </label>
              </div>
            </div>

            <input
              type="text"
              name="company"
              placeholder="Full Name"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <Dropdown Con={true} Bg={false} />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact(Mobile)"
              className="w-full p-3 border rounded-md bg-white placeholder:text-primary"
            />
            <div>
              <textarea
                className="w-full px-4 py-2 mt-1 bg-background rounded-md text-primary h-32 placeholder:text-primary"
                placeholder="Type a message..."
              ></textarea>
            </div>

            {category === "testimony" && (
              <div>
                <input
                  type="file"
                  className="w-full px-4 py-2 mt-1 border rounded-md bg-white text-primary"
                />
                <p className="text-xs mt-1 text-white">
                  Upload image, pdf or 1-minute video of your testimony (e.g.,
                  Before and After, Doctors report, etc.)
                </p>
              </div>
            )}

            <button type="submit" className="w-full flexcent">
              <p className="w-[200px] bg-white text-primary p-3 rounded-[12px] hover:text-white hover:bg-primary hover:text-primary transition-all duration-500 font-semibold border-white border hover:scale-105">
                Save
              </p>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Aids;
