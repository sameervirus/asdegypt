import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";
import parse from "html-react-parser";

export default function About({ pages }) {
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("About Us"),
      url: "#",
    },
  ];

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { site_content, locale } = usePage().props;
  function getContentItem(str) {
    const item = site_content.find((s) => s.code === str && s.lang === locale);
    return item.content;
  }

  function getPageContent(str) {
    const page = pages.find((p) => p.page === str);
    return locale === "ar" ? parse(page.content_ar) : parse(page.content);
  }

  return (
    <>
      <Head title={__("About Us")} />
      <AppLayout>
        <Breadcrumb title={__("About Us")} items={items} />

        <div className="">
          <ul
            className="about-tabs flex flex-wrap -mb-px text-sm font-bold uppercase text-center lg:px-10"
            id="default-tab"
            role="tablist"
          >
            <li
              className={`ml-[1px] ${activeTab === "profile" ? "active" : ""}`}
              role="presentation"
            >
              <button
                className="inline-block px-4 py-2 uppercase hover:text-primary"
                id="profile-tab"
                onClick={() => handleTabClick("profile")}
                role="tab"
                aria-selected={activeTab === "profile" ? "true" : "false"}
              >
                {__("About Us")}
              </button>
            </li>
            <li
              className={`ml-[1px] ${activeTab === "provided" ? "active" : ""}`}
              role="presentation"
            >
              <button
                className="inline-block px-4 py-2 uppercase hover:text-primary"
                id="provided-tab"
                onClick={() => handleTabClick("provided")}
                role="tab"
                aria-selected={activeTab === "provided" ? "true" : "false"}
              >
                {__("Provided")}
              </button>
            </li>
            <li
              className={`ml-[1px] ${activeTab === "policy" ? "active" : ""}`}
              role="presentation"
            >
              <button
                className="inline-block px-4 py-2 uppercase hover:text-primary"
                id="policy-tab"
                onClick={() => handleTabClick("policy")}
                role="tab"
                aria-selected={activeTab === "policy" ? "true" : "false"}
              >
                {__("Policy")}
              </button>
            </li>
          </ul>
        </div>
        <div
          id="default-tab-content"
          className="mt-[-8px] py-5 lg:py-20 mb-10 bg-black"
        >
          <div
            className={`${activeTab === "profile" ? "block" : "hidden"}`}
            id="profile"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">
                {getContentItem("title")}
              </h2>
              <div className="">{getPageContent("about-tab1")}</div>
            </div>
          </div>
          <div
            className={`${activeTab === "provided" ? "block" : "hidden"}`}
            id="provided"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">
                {__("ProvidedText")}
              </h2>
              <div className="">{getPageContent("about-tab2")}</div>
            </div>
          </div>
          <div
            className={`${activeTab === "policy" ? "block" : "hidden"}`}
            id="policy"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">{__("PolicyText")}</h2>
              <div className="">{getPageContent("about-tab3")}</div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
