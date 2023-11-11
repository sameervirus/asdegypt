import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { getDistinctObjects, toTitleCase } from "@/Util/Helpers";

export default function MainMenu() {
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <ul className="menu-top flex me-10">
        <li>
          <Link href="/products">Products</Link>
          <div>
            <ul>
              {categories?.map((category) => (
                <li key={category.id}>
                  <Link href={`/products/${category.agent}`}>
                    {toTitleCase(category.agent)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/reference">Reference</Link>
        </li>
      </ul>
      <ul className="menu-top flex">
        <li>
          <Link href="/distributors">Distributors</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
}
