import { Link } from "@inertiajs/react";
import React from "react";

export default function ProductHead({ categories, agent_products, locale }) {
  return (
    <div className="hidden lg:block top-nav mt-10">
      <ul
        className="about-tabs flex flex-wrap -mb-px text-sm font-bold uppercase text-center px-5 lg:px-10"
        id="default-tab"
        role="tablist"
      >
        {categories &&
          agent_products &&
          categories?.map((cat) => (
            <li
              key={cat.id}
              className={`ml-[1px] ${
                cat.agent === agent_products[0].agent ? "active" : ""
              }`}
              role="presentation"
            >
              <Link
                className={`inline-block px-4 py-2 uppercase hover:text-primary ${cat.agent}`}
                href={`/products/${cat.agent}`}
              >
                {locale === "ar" ? cat.agent_ar : cat.agent?.replace("_", " ")}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
