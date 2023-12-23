import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { getDistinctObjects, toTitleCase } from "@/Util/Helpers";
import { __ } from "@/Util/lang";

export default function MainMenu() {
  const { products, locale } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <ul className="menu-top flex">
        <li>
          <Link href="/products">{__("Products")}</Link>
          <div>
            <ul>
              {categories?.map((category) => (
                <li key={category.id}>
                  <Link href={`/products/${category.agent}`}>
                    {locale === "ar"
                      ? category.agent_ar
                      : toTitleCase(category.agent)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link href="/news">{__("News")}</Link>
        </li>
        <li>
          <Link href="/reference">{__("Reference")}</Link>
        </li>
      </ul>
      <ul className="menu-top flex">
        <li>
          <Link href="/product-registration">{__("Product Registration")}</Link>
        </li>
        <li>
          <Link href="/distributors">{__("Distributors")}</Link>
        </li>
        <li>
          <Link href="/about">{__("About")}</Link>
        </li>
        <li>
          <Link href="/contact-us">{__("Contact")}</Link>
        </li>
      </ul>
    </>
  );
}
