import { Link } from "@inertiajs/react";
import React from "react";

export default function ServiceBox() {
  return (
    <Link href="#" className="w-full lg:w-1/2">
      <div className="min-h-[200px] lg:min-h-[250px] p-10 bg-[url('https://www.gespasa.es/uploads/files/content/9032-bg-a.png')] bg-no-repeat bg-cover">
        <h2 className="text-white text-2xl lg:text-4xl">
          Services <br /> Type
        </h2>
      </div>
    </Link>
  );
}
