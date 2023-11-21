import React from "react";
import ServiceBox from "./ServiceBox";

export default function ServiceSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <ServiceBox title="Technical Service" to="contact-us" />
      <ServiceBox title="Product Registration" to="product-registration" />
    </div>
  );
}
