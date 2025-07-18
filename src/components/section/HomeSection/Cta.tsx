import Link from "next/link";
import React from "react";
import { useParallax } from "react-scroll-parallax";

const Cta = () => {
  const { ref: textRef } = useParallax<HTMLDivElement>({ speed: 2 });
  const { ref: videoRef } = useParallax<HTMLDivElement>({ speed: 7 });

  return (
    <div className="w-full lg:h-screen flex items-center justify-center text-white py-24 bg-primary/20">
      <div className="w-[90vw] rounded-3xl bg-primary lg:h-[80vh] relative scale-[0.9] flex justify-around flex-row-reverse h-[50vh]">
        {/* Left Text */}
        <div ref={textRef} className="lg:basis-1/2 flex items-center flex-col">
          <div className="text-8xl font-heading font-extrabold absolute md:-top-[70px] md:left-[30px] -top-[60px] left-[10px] text-white">
            Join Us
          </div>

          <div className="lg:w-[60%] relative md:top-9 top-12 max-sm:px-4 md:w-[80%] text-lg ">
            <h1 className="md:text-[50px] text-3xl whitespace-nowrap leading-[1.15]">
              In Church Online
            </h1>
            <p className="mt-4">
              Join us every Sunday at 9:30am and 11:45am for our Atlanta
              Gatherings or 9:30am and 11:30am for our Gudu gatherings at
              DC.online.
            </p>

            <Link href="/livestream">
              <button className="primary-button flex flex-row gap-1 justify-center items-center mt-4 text-sm hover:scale-105">
                Watch Live
              </button>
            </Link>
          </div>
        </div>

        {/* Right Video */}

        <div
          ref={videoRef}
          className="md:w-[500px] lg:h-full rounded-3xl overflow-hidden lg:relative lg:-top-9 lg:right-9 h-[200px]  md:h-[400px] md:-bottom-6 hidden md:block"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/worship2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Cta;
