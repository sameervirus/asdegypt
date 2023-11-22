import { capitalizeEachWord, decodeHTML } from "@/Util/Helpers";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function ProductBox({ product }) {
  const { locale } = usePage().props;
  return (
    <div className="bg-[#fff]">
      <Link
        href={`/products/${product.agent}/${product.category}/${product.model}`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row">
            <div className="p-7 flex flex-col lg:w-1/2">
              <span className="text-primary font-bold uppercase text-sm">
                {locale === "ar"
                  ? product.agent_ar
                  : capitalizeEachWord(product.agent)}
              </span>
              <h2 className="text-2xl lg:text-4xl mb-2 lg:mb-4">
                {locale === "ar"
                  ? product.model_ar
                  : capitalizeEachWord(product.model)}
              </h2>
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: decodeHTML(
                    locale === "ar" ? product.features_ar : product.features,
                  )
                    .split(/\s+/)
                    .slice(0, 20)
                    .join(" "),
                }}
              ></p>
            </div>
            <div className="flex justify-center p-7">
              <img
                height="240px"
                width="240px"
                src={`https://asdegypt.com/images/${product.agent}/${product.model}/small_${product.model}.jpg`}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
