import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";

export default function News({ news }) {
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("News"),
      url: "#",
    },
  ];

  const { locale } = usePage().props;
  const decodeHTML = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <>
      <Head title={__("News")} />
      <AppLayout>
        <Breadcrumb title={__("News")} items={items} />

        <div className="container lg:my-24 mx-auto md:px-6">
          <section className="lg:mb-32 text-center">
            <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12 p-4">
              {news &&
                news.map((post) => (
                  <div key={post.id} className="mb-6 lg:mb-0">
                    <div className="h-full bg-white block relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <div className="flex">
                        <div
                          className="bg-cover bg-no-repeat max-h-[200px] overflow-hidden relative"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <img src={post?.images[0].image} className="w-full" />
                          <Link href={`/news/${post.slug}`}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                          </Link>
                        </div>
                      </div>
                      <div className="p-6">
                        <h5 className="mb-3 text-lg font-bold min-h-[56px]">
                          {locale === "ar" ? post.title_ar : post.title}
                        </h5>

                        <p
                          className="mb-4 pb-2"
                          dangerouslySetInnerHTML={{
                            __html: decodeHTML(
                              locale === "ar" ? post.body_ar : post.body,
                            )
                              .slice(0, 40)
                              .concat("…"),
                          }}
                        />
                        <Link
                          href={`/news/${post.slug}`}
                          className="active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] bg-primary duration-150 ease-in-out focus:bg-primary-600 focus:outline-none focus:ring-0 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] font-medium hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] inline-block leading-normal pb-2 pt-2.5 px-6 rounded-full shadow-[0_4px_9px_-4px_#3b71ca] text-white text-xs transition uppercase"
                        >
                          {__("Read more")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </AppLayout>
    </>
  );
}
