import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import parse from "html-react-parser";
import { __ } from "@/Util/lang";

export default function Reference({ pages }) {
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("Reference"),
      url: "#",
    },
  ];

  const { locale } = usePage().props;

  function getPageContent(str) {
    const page = pages.find((p) => p.page === str);
    return locale === "ar" ? parse(page.content_ar) : parse(page.content);
  }

  return (
    <>
      <Head title={__("Reference")} />
      <AppLayout>
        <Breadcrumb title={__("Reference")} items={items} />
        <div className="bg-[#f8f8f8] py-4 mb-4">
          <div className="container lg:my-24 p-4 mx-auto md:px-6">
            <h1 className="text-primary text-3xl text-center mb-10">
              {__("PreWork")}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="reference-list">
                <h2 className="text-2xl mb-5">{__("PublicCompanies")}:</h2>
                {getPageContent("reference_public")}
              </div>
              <div className="reference-list">
                <h2 className="text-2xl mb-5">{__("PrivateCompanies")}:</h2>
                {getPageContent("reference_private")}
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
