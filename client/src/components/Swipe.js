import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import {
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram5,
  Instagram7,
} from "../assets";
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
          <img src={Instagram1} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Before Second Semester Start
              </p>
              <p className="py-2 text-gray-200">JANUARY 22, 2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Instagram2} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Batangas State University Main I
              </p>
              <p className="py-2 text-gray-200">JANUARY 07, 2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Instagram3} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                SZA•Normal Girl
              </p>
              <p className="py-2 text-gray-200">JANUARY 03, 2023</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Instagram5} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Tuhian Beach Catanauan Quezon
              </p>
              <p className="py-2 text-gray-200">JULY 11, 2021</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Instagram7} alt="/" className="object-cover h-full" />
          <div className={styles.headerimage}>
            <div className="my-96 px-8">
              <p className="text-white text-2xl font-tenor py-2">
                Notre Maison Lucena City
              </p>
              <p className="py-2 text-gray-200">JUNE 14, 2021</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
