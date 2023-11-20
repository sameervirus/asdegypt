import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";

export default function Post({ post }) {
  const { locale } = usePage().props;

  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("News"),
      url: "/news",
    },
    {
      name: locale === "ar" ? post.title_ar : post.title,
      url: "#",
    },
  ];

  const decodeHTML = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <>
      <Head title={locale === "ar" ? post.title_ar : post.title} />
      <AppLayout>
        <Breadcrumb
          title={locale === "ar" ? post.title_ar : post.title}
          items={items}
        />

        <div className="container my-24 mx-auto md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img src={post?.images[0].image} className="w-full" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-medium">
                {locale === "ar" ? post.title_ar : post.title}
              </h2>
              <hr className="my-4" />
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHTML(
                    locale === "ar" ? post.body_ar : post.body,
                  ),
                }}
              ></div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
