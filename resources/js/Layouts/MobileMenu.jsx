import ApplicationLogo from "@/Components/ApplicationLogo";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import { __ } from "@/Util/lang";
import { Link } from "@inertiajs/react";
import React from "react";

export default function MobileMenu({ setMenuPanel }) {
  return (
    <div className="bg-gray-100 rtl:ps-4 w-full">
      <div className="bg-white flex justify-between px-2">
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
                strokeWidth="1.06"
                d="M16,16 L4,4"
              ></path>
              <path
                fill="none"
                stroke="#000"
                strokeWidth="1.06"
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
        <div className="bg-white text-gray-500 px-2">
          <strong className="text-[12px]">{__("Products")}</strong>
        </div>

        <ul className="mobile-menu">
          <li>
            <Link href="/products">{__("Products")}</Link>
          </li>
          <li>
            <Link href="/news">{__("News")}</Link>
          </li>
          <li>
            <Link href="/reference">{__("Reference")}</Link>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <div className="bg-white text-gray-500 px-2">
          <strong className="text-[12px]">{__("Company")}</strong>
        </div>

        <ul className="mobile-menu">
          <li>
            <Link href="/product-registration">
              {__("Product Registration")}
            </Link>
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
      </div>
    </div>
  );
}
