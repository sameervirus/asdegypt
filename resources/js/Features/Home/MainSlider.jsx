import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ButtonPrimary from "@/Components/ButtonPrimary";
import { usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";

export default function MainSlider({ sliders }) {
  const { locale } = usePage().props;

  if (!sliders) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-10 bg-[#f8f8f8]">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        className="carouselClass"
      >
        {sliders?.map((slide) => (
          <div key={slide.id} className="grid lg:grid-cols-2 lg:gap-4">
            <div className="mt-[70px] lg:mt-[140px] ms-[40px] lg:ms-[70px] p-10 text-start">
              <h2 className="text-xl lg:text-4xl uppercase mb-4">
                {locale === "ar" ? slide.header_ar : slide.header}
              </h2>
              <p className="text-2xl mb-4">
                {locale === "ar" ? slide.caption_ar : slide.caption}
              </p>
            </div>
            <div className="mx-auto max-w-[500px]">
              <img
                width="500px"
                height="500px"
                src={`https://app.asdegypt.com/images/slider/${slide.image}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
