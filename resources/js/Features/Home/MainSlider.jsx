import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MainSlider({ sliders }) {
  console.log(sliders);
  if (!sliders) {
    return <div>Loading...</div>;
  }
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {sliders?.map((slide) => (
        <div key={slide.id} className="grid grid-cols-2 gap-4">
          <div>
            <p>Legend 1</p>
          </div>
          <img src={`https://app.asdegypt.com/images/slider/${slide.image}`} />
        </div>
      ))}
    </Carousel>
  );
}
