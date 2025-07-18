import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ResponsiveSwiper() {
  return (
    <div>
      {/* Visible on small screens only */}
      <div className="block sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1}>
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-500 p-10 text-white">
                Slide {index + 1}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Visible on larger screens */}
      <div className="hidden sm:flex justify-around">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-gray-300 p-10">
            Slide {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
