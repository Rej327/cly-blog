import React, { useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./index.css";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Swipe() {
  const [swiperRef, setSwiperRef] = useState(null);

  const [slides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        virtual
        className="h-full p-0"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
