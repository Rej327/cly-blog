import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import { slide1, slide2, slide3 } from "../assets";

export default function SlidePost() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="h-[full]"
      >
        <SwiperSlide>
          <img src={slide1} alt="/" className="object-cover h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="/" className="object-cover h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="/" className="object-cover h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
