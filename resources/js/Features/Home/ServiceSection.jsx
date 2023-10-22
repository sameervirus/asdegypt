import React from "react";
import ServiceBox from "./ServiceBox";

export default function ServiceSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <ServiceBox />
      <ServiceBox />
    </div>
  );
}
