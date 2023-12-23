import { toTitleCase } from "@/Util/Helpers";
import { Link } from "@inertiajs/react";
import React from "react";
import { __ } from "@/Util/lang";

export default function Tag({ locale, tags }) {
  return (
    <div className="hidden lg:flex lg:col-span-3">
      <div className="w-full p-5 bg-white relative">
        <h2>{__("applications")}</h2>
        <ul className="ps-4 list-decimal">
          {tags?.map((tag) => (
            <li
              key={tag.slug}
              className="py-1 hover:text-primary uppercase font-semibold"
            >
              <Link href={`/search?tag=${tag.slug}`}>
                {locale === "ar"
                  ? tag.arabicName
                  : toTitleCase(tag.englishName)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
