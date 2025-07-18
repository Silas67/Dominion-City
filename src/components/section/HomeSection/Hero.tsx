import React from "react";
import Image from "next/image";
import img1 from "@/components/assets/Images/Hero4.png";
import img2 from "@/components/assets/Images/Hero5.png";
import img3 from "@/components/assets/Images/Hero6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const images = [{ img: img1 }, { img: img2 }, { img: img3 }];

const Hero = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden relative max-sm:h-[50vh]">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full flex items-start justify-center h-[100vh] max-sm:h-[50vh] bg-hero  uppercase py-24 flex-col px-[40px]">
            {/* <div className="text-[0.875rem] text-neutral-300">Welcome to</div> */}
            <div className="text-[8rem] text-transparent bg-clip-text bg-white font-black leading-[0.9] max-sm:text-5xl font-heading">
              Dominion <br />
              City
            </div>
            <div className="text-[12px] text-neutral-300 tracking-widest m-2 max-sm:text-[10px]">
              Rasing leaders that transforms society
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-sm:h-[50vh] h-[100vh]">
            <Image
              src={img1}
              width={100}
              height={100}
              alt="Hero4"
              className="object-cover w-full h-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-sm:h-[50vh] h-[100vh]">
            <Image
              src={img2}
              alt="Hero4"
              className="object-cover w-full h-full "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-sm:h-[50vh] h-[100vh]">
            <Image
              src={img3}
              alt="Hero4"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
