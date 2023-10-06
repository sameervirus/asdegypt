import React from "react";

export default function MainMenu() {
  return (
    <>
      <ul className="menu-top flex me-10">
        <li>
          <a href="/products">Products</a>
          <div>
            <ul>
              <li>
                <a href="/en/products/fuel.html">Fuel</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
      </ul>
      <ul className="menu-top flex">
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
      </ul>
    </>
  );
}
