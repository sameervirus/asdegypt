import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { __ } from "@/Util/lang";
import { getDistinctObjects } from "@/Util/Helpers";

export default function Products() {
  const { products, locale } = usePage().props;
  const agents = getDistinctObjects(products);
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("Products"),
      url: "/products",
    },
  ];

  return (
    <>
      <Head title={__("Products")} />
      <AppLayout>
        <Breadcrumb title={__("Products")} items={items} />

        <div className="container lg:my-24 mx-auto md:px-6">
          <section className="lg:mb-32 text-center">
            <div className="grid gap-6 lg:grid-cols-4 xl:gap-x-12 p-4">
              {agents &&
                agents.map((agent) => (
                  <div key={agent.id} className="mb-6 lg:mb-0">
                    <div className="h-full bg-white block relative shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <div className="flex">
                        <div
                          className="bg-cover bg-no-repeat w-full overflow-hidden relative"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <img
                            src={`/images/${agent.agent}.png?v=${Math.floor(
                              new Date().getTime() / 1000,
                            )}`}
                            className="w-full"
                          />
                          <Link href={`/products/${agent.agent}`}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                          </Link>
                        </div>
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
