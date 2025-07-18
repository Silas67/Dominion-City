"use client";
import Hero from "@/components/section/FormSection/Hero";
import Footer from "@/components/section/HomeSection/Footer";
import Giving from "@/components/section/HomeSection/Giving";
import Header from "@/components/section/HomeSection/header";
import useLenis from "@/hooks/useLenis";
import React from "react";

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
        <Giving Bg={false} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Page;
