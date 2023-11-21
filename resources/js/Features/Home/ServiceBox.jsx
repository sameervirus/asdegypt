import { __ } from "@/Util/lang";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ServiceBox({ title, to }) {
  return (
    <Link href={`/${to}`} className="w-full lg:w-1/2">
      <div
        className={`min-h-[200px] lg:min-h-[250px] p-10 ${to} bg-no-repeat bg-cover`}
      >
        <h2 className="text-white text-2xl lg:text-4xl">{__(title)}</h2>
      </div>
    </Link>
  );
}
