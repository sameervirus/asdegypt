import React from "react";
import ProductBox from "./ProductBox";

export default function FeatureProducts({ features }) {
  return (
    <div className=" mb-10 py-5 px-5 lg:px-0 bg-[#f8f8f8]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProductBox product={features[0]} />
        <div className="flex flex-col gap-5">
          <ProductBox product={features[1]} />
          <ProductBox product={features[2]} />
        </div>
      </div>
    </div>
  );
}
