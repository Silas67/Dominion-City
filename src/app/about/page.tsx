"use client";
import Hero from "@/components/section/AboutSection/Hero";
import Header from "@/components/section/HomeSection/header";
import React from "react";
import useLenis from "@/hooks/useLenis";
import AboutChurch from "@/components/section/AboutSection/AboutChurch";
import Ministry from "@/components/section/AboutSection/Ministry";
import Churches from "@/components/section/HomeSection/Churches";
import Footer from "@/components/section/HomeSection/Footer";

const Page = () => {
  useLenis();
  return (
    <div className="lg:w-full sm:w-[100vw] overflow-hidden relative">
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Ministry />
      </section>
      <section>
        <AboutChurch />
      </section>
      <section>
        <Churches />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Page;
