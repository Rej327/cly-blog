import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { image1, image2, image3, image4, image5 } from "../assets";
import { styles } from "../global-styles/globalstyles";

export default function Swipe() {
  return (
    <div className="h-full">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        className="h-screen w-full sm:h-full"
      >
        <SwiperSlide>
          <img src={image1} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-[80px] px-2 sm:my-96 sm:px-8">
              <p className="text-white text-[18px] sm:text-2xl font-tenor py-2">
                Write Website from Scratch
              </p>
              <p className="text-[13px] sm:text-base py-2 text-gray-200">
                JULY 20, 2022 | WEB DESIGN
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                20 Modern Inspirational UI Examples
              </p>
              <p className="py-2 text-gray-200">AUG 16, 2022 | WEB DESIGN</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Support for Legacy Browsers
              </p>
              <p className="py-2 text-gray-200">SEPT 8, 2022 | WEB DESIGN</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                An Unobstructive 'Dashboardlink' Link
              </p>
              <p className="py-2 text-gray-200">OCT 29, 2022 | WEB DESIGN</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Fixing Jagged Google Fonts in Chrome
              </p>
              <p className="py-2 text-gray-200">NOV 19, 2022 | WEB DESIGN</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
