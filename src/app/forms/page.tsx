"use client";
import Formcontact from "@/components/section/FormSection/Formcontact";
import Hero from "@/components/section/FormSection/Hero";
import Footer from "@/components/section/HomeSection/Footer";
import Header from "@/components/section/HomeSection/header";
import useLenis from "@/hooks/useLenis";
import React from "react";

const Page = () => {
  useLenis();
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Formcontact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Page;
