import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";
import { Autoplay } from "swiper/modules";

export default function MainSlider2({ sliders }) {
  const { locale } = usePage().props;
  const swiperRef = useRef(null);

  return (
    <div className="slide-warp">
      <div className="slide-container">
        <Swiper
          direction={"vertical"}
          modules={[Autoplay]}
          loop
          className="mySwiper"
          ref={swiperRef}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          speed={700}
        >
          {sliders?.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  style={{
                    backgroundImage: `url(https://app.asdegypt.com/images/slider/${slide.image})`,
                    display: "block",
                  }}
                  className="clone"
                  aria-hidden="true"
                >
                  <div className="overlay-gradient"></div>
                  <div className="container">
                    <div
                      className={`slider-text-inner ${
                        isActive ? "animated fadeInUp" : ""
                      }`}
                    >
                      <h1>
                        {locale === "ar" ? slide.header_ar : slide.header}
                      </h1>
                      <h2>
                        {locale === "ar" ? slide.caption_ar : slide.caption}
                      </h2>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
