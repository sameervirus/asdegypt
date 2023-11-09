import React from "react";
import { usePage } from "@inertiajs/react";
import { getDistinctObjects, toTitleCase } from "@/Util/Helpers";

export default function MainMenu() {
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <ul className="menu-top flex me-10">
        <li>
          <a href="/products">Products</a>
          <div>
            <ul>
              {categories?.map((category) => (
                <li key={category.id}>
                  <a href="/en/products/fuel.html">
                    {toTitleCase(category.agent)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <a href="/products">News</a>
        </li>
        <li>
          <a href="/products">Reference</a>
        </li>
      </ul>
      <ul className="menu-top flex">
        <li>
          <a href="/products">Distributors</a>
        </li>
        <li>
          <a href="/products">About</a>
        </li>
        <li>
          <a href="/products">Contact</a>
        </li>
      </ul>
    </>
  );
}
