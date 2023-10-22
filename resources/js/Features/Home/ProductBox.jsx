import { Link } from "@inertiajs/react";
import React from "react";

export default function ProductBox() {
  return (
    <div className="bg-[#f8f8f8]">
      <Link href="/">
        <div className="flex flex-col">
          <div className="flex">
            <div className="p-7 pb-0 flex flex-col w-1/2">
              <span className="text-primary font-bold uppercase text-sm">
                Fuel
              </span>
              <h2 className="text-2xl lg:text-4xl mb-2 lg:mb-4">
                Filters with microscopic accuracy
              </h2>
              <p className="text-sm text-gray-500">
                Control the fluid level of your tank from your smartphone.
              </p>
            </div>
            <div>
              <img
                height="240px"
                width="240px"
                src="https://www.gespasa.es/uploads/files/content/sm9063-FG300_661900400_661900300_66192_66191_web_portada_secundaria_V2.png"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
