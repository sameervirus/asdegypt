import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
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

  return (
    <>
      <Head>
        <title>{locale === "ar" ? post.title_ar : post.title}</title>
        <meta
          name="description"
          content={locale === "ar" ? post.title_ar : post.title}
        />
        {/* Add other meta tags as needed */}
      </Head>
      <AppLayout>
        <Breadcrumb
          title={locale === "ar" ? post.title_ar : post.title}
          items={items}
        />
        <div className="container lg:my-24 mx-auto md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <img
                src={post?.images[0].image}
                className="w-full"
                alt={post.images[0].alt}
              />
            </div>
            <div className="flex flex-col p-4">
              <h2 className="text-xl lg:text-3xl font-bold">
                {locale === "ar" ? post.title_ar : post.title}
              </h2>
              <hr className="my-4" />
              <div
                dangerouslySetInnerHTML={{
                  __html: locale === "ar" ? post.body_ar : post.body,
                }}
              ></div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
