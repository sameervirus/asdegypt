import { Link } from "@inertiajs/react";
import React from "react";

export default function Breadcrumb({ title, items }) {
  return (
    <div className="flex flex-col lg:mt-5 p-5 lg:py-8 lg:border-y lg:border-gray-200">
      <h1 className="text-center text-3xl text-primary">{title}</h1>
      <ul className="breadcrumb">
        {items &&
          items.map((item) => (
            <li key={item.name}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
