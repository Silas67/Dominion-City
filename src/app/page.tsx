"use client";
import Aids from "@/components/section/HomeSection/Aids";
import Breif from "@/components/section/HomeSection/Breif";
import Cta from "@/components/section/HomeSection/Cta";
import Footer from "@/components/section/HomeSection/Footer";
import Giving from "@/components/section/HomeSection/Giving";
import Header from "@/components/section/HomeSection/header";
import Hero from "@/components/section/HomeSection/Hero";
import Project from "@/components/section/HomeSection/Project";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  useLenis();
  return (
    <div
      id="main-content"
      className="lg:w-full sm:w-[100vw] overflow-hidden relative transition-all duration-500 "
    >
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <Breif />
      </section>
      <section>
        <Cta />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Giving Bg />
      </section>
      <section>
        <Aids />
      </section>
      <Footer />
    </div>
  );
}
