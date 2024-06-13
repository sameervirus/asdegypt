import { capitalizeEachWord } from "@/Util/Helpers";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ImageCard({ locale, url, name_ar, favImage, name }) {
  return (
    <div className="bg-white card flex items-center lg:block lg:p-5 relative border-b-2 border-[#00000005] lg:border-0 overflow-hidden">
      <Link
        href={url}
        className="overlay absolute top-0 start-0 h-full w-full z-10"
      ></Link>
      <div className="card-img category-img">
        <img
          src={favImage}
          alt={name}
          onError={(e) => {
            e.target.src = "/images/250x250-Placeholder.png";
          }}
        />
      </div>
      <Link href={url}>
        <h2 className="text-sm font-semibold ms-4 lg:ms-0 relative z-[1] bg-white ps-5 hover:text-red-500">
          {locale === "ar" ? name_ar : capitalizeEachWord(name)}
        </h2>
      </Link>
    </div>
  );
}
