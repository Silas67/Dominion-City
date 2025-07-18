"use client";
import React, { useState } from "react";
import { footerLinks, Socials } from "@/components/constant/index";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdAdd, MdRemove } from "react-icons/md";

const Footer = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="w-full overflow-hidden p-8 flex flex-col bg-muted gap-14 text-[#0a1431]">
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className=" relative flex justify-center gap-10 max-sm:flex-col"
      >
        <div className="p-4">
          <h1 className="font-sans font-medium text-4xl ">
            Let&apos;s Keep In Touch
          </h1>
          <p className="text-gray-700 text-sm max-sm:text-[10px]">
            Follow us on our social media events for up-to-date events
          </p>
          <div className="w-fit flex-wrap flex ">
            {Socials.map((item, id) => (
              <div
                key={id}
                className="w-fit h-fit m-1 p-2 bg-transparent border border-foreground rounded-full flex items-center justify-center mt-3"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-rows-3 lg:grid-cols-3 gap-12 lg:px-12 h-fit ">
          {footerLinks.map((footer, id) => (
            <div key={id}>
              {/* Section Header */}
              <button
                onClick={() => toggleSection(id)}
                className="flex justify-between w-full text-lg font-calm font-medium md:text-nowrap"
              >
                {footer.heading}
                {openSection === id ? (
                  <MdRemove className="text-xl lg:hidden" />
                ) : (
                  <MdAdd className="text-xl lg:hidden" />
                )}
              </button>

              {/* Collapsible Links */}
              <ul
                className={`mt-2 space-y-2 text-gray-600 text-sm  max-[950px]:overflow-hidden transition-all duration-300 ease-in-out max-sm:${
                  openSection === id ? "max-h-full p-2" : " max-h-0 p-0"
                }`}
              >
                {footer.link.map((link, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-primary hover:underline transition-all duration-300"
                  >
                    {link.href.startsWith("https") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="text-[12px] cursor-default w-full border-t-[1px] border-white p-4 flex justify-between max-sm:text-[10px] max-sm:gap-4 my-2">
        <p>@ CopyRight. All rights reserved</p>
        <div>Dominion City, Gudu | Tel:(+234) 703 380 9119</div>
      </div>
    </footer>
  );
};

export default Footer;
