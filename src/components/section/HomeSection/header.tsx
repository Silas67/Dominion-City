"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import img1 from "@/components/assets/Images/DC_logo2.png";
import { easeInOut, motion } from "framer-motion";
import { Navlinks, Sidebarlinks } from "@/components/constant/index";

const Header = () => {
  const [navIsLive, setNavIsLive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setNavIsLive(!navIsLive);
    console.log(navIsLive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[10vh] flex items-center justify-center  z-50  transition-all duration-300 ${
        isScrolled
          ? "bg-background text-foreground shadow-md"
          : " bg-transparent text-white"
      }`}
    >
      <div className="w-full flex items-center justify-between mx-[40px]">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-4xl cursor-pointer outline-none hover:scale-105 transition-all duration-300">
            <Image src={img1} alt="/" width={50} className="outline-none" />
          </div>
        </Link>

        <div className="flex justify-center items-center gap-12">
          {/* NavLinks */}
          <nav>
            <div className="flex justify-between gap-8 items-center max-sm:hidden max-[690px]:hidden max-[1030px]:hidden max-2000px:flex text-[10px]">
              {Navlinks.map((link, id) => (
                <Link key={id} href={link.href}>
                  <div
                    className={`hover:text-primary hover:scale-105 transition-all duration-300 scale-100 hover:font-bold ${link.class}`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div className=" hidden max-[1030px]:flex">
                <motion.aside
                  initial={{ x: "100vw" }}
                  animate={{ x: navIsLive ? 0 : "200vw" }}
                  transition={{ ease: "easeInOut", duration: 0.3 }}
                  className="sidebar relative"
                >
                  <nav className="nav">
                    <ul>
                      {Sidebarlinks.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href} className="a">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </motion.aside>
              </div>
            </div>
          </nav>

          {/* Call to Action Button */}
          <div className="flex gap-7">
            <button className="primary-button flex flex-row gap-1 justify-center items-center max-sm:hidden max-md:flex max-[690px]:flex hover:scale-105">
              {" "}
              <Link className="text-[10px]" href="/contact">
                Join the family{" "}
              </Link>
            </button>

            <div
              onClick={handleClick}
              className="hidden text-2xl max-sm:flex max-[1030px]:flex sm:text-3xl lg:text-5xl relative transition-all duration-[2s]"
            >
              {navIsLive ? (
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ rotate: 180, scale: 1.2 }}
                  exit={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <MdClose />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: -180, scale: 1 }}
                  animate={{ rotate: 0, scale: 1.2 }}
                  exit={{ rotate: -180, scale: 1 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  <MdMenu />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
