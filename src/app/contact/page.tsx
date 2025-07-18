"use client";
import Getintouch from "@/components/section/ContactSection/Getintouch";
import Hero from "@/components/section/ContactSection/Hero";
import MapView from "@/components/section/ContactSection/MapView";
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
        <Getintouch />
      </section>
      <section>
        <MapView />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Page;
