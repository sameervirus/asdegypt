import React from "react";
import ProductBox from "./ProductBox";

export default function FeatureProducts() {
  return (
    <div className=" mb-10 py-5 px-5 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProductBox />
        <div className="flex flex-col gap-5">
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
}
