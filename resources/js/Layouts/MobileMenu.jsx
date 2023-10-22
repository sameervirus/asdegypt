import ApplicationLogo from "@/Components/ApplicationLogo";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import React from "react";

export default function MobileMenu({ setMenuPanel }) {
  return (
    <div className="w-full px-2 py-1 pe-4 bg-gray-100">
      <div className="flex justify-between bg-white">
        <div className="">
          <ApplicationLogo />
        </div>

        <div className="flex gap-2 items-center lg:hidden">
          <a className="" href="#" onClick={() => setMenuPanel(false)}>
            <svg
              className="w-[27px] h-auto"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="close"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.06"
                d="M16,16 L4,4"
              ></path>
              <path
                fill="none"
                stroke="#000"
                stroke-width="1.06"
                d="M16,4 L4,16"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-2">
        <LanguageSwitcher />
      </div>
      <div className="mb-4">
        <div className="bg-white text-gray-500">
          <strong className="text-[9px]">PRODUCTS</strong>
        </div>

        <ul className="mobile-menu">
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/products">News</a>
          </li>
          <li>
            <a href="/products">Reference</a>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="bg-white text-gray-500">
          <strong className="text-[9px]">COMPANY</strong>
        </div>

        <ul className="mobile-menu">
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
      </div>
    </div>
  );
}
