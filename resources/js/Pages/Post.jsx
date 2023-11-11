import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Post({ post }) {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "News",
      url: "/news",
    },
    {
      name: post.title,
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
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <Breadcrumb title="News" items={items} />

        <div className="container my-24 mx-auto md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img src={post?.images[0].image} className="w-full" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-medium">{post.title}</h2>
              <hr className="my-4" />
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHTML(post.body),
                }}
              ></div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
