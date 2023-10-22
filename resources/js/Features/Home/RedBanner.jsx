import React from "react";
import parse from "html-react-parser";
import ButtonPrimary from "@/Components/ButtonPrimary";

export default function RedBanner({ pages }) {
  const page = pages.find((p) => p.page === "home-who-we-are");
  const handelClick = () => {};
  return (
    <div className="flex mb-10 py-20 px-4 flex-col items-center bg-primary text-white">
      <div className="home-about text-center lg:w-[60%] lg:text-2xl">
        {parse(page.content)}
        <div className="text-center mt-8">
          <ButtonPrimary text="About us" click={handelClick} />
        </div>
      </div>
    </div>
  );
}
