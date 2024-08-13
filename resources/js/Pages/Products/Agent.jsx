import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import {
  capitalizeFirstLetter,
  getUniqueTags,
  toTitleCase,
} from "@/Util/Helpers";
import ProductHead from "@/Features/ProductHead";
import { __ } from "@/Util/lang";
import ImageCard from "./ImageCard";
import Tag from "./Tag";

function getDistinctObjects(array) {
  const uniqueIds = new Set();
  return array.filter((obj) => {
    if (!uniqueIds.has(obj.agent)) {
      uniqueIds.add(obj.agent);
      return true;
    }
    return false;
  });
}

export default function Agent({ agent_products }) {
  const { products, locale } = usePage().props;
  const categories = getDistinctObjects(products);
  console.log(agent_products);

  return (
    <>
      <Head
        title={
          locale === "ar" ? agent_products[0].agent_ar : agent_products[0].agent
        }
      />
      <AppLayout>
        <div className="block lg:hidden bg-primary text-white">
          <Link className="flex flex-wrap items-center p-3" href={`/products`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="chevron-left"
              className="back-icon"
            >
              <polyline
                fill="none"
                stroke="#fff"
                strokeWidth="1.03"
                points="13 16 7 10 13 4"
              ></polyline>
            </svg>
            {__("Products")}
          </Link>
        </div>
        <ProductHead
          categories={categories}
          agent_products={agent_products}
          locale={locale}
        />
        <div className="mt-[-8px] py-5 px-5 lg:py-5 lg:px-10 mb-10 bg-[#00000005]">
          <h1 className="text-primary text-3xl font-bold mb-4">
            {locale === "ar"
              ? agent_products[0].agent_ar
              : capitalizeFirstLetter(agent_products[0].agent)}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                {agent_products &&
                  agent_products.map((c) => (
                    <ImageCard
                      key={c.id}
                      locale={locale}
                      url={`/products/${c.agent}/${c.category}`}
                      favImage={`/images/${c.agent}_${c.category}.png`}
                      name={c.category}
                      name_ar={c.category_ar}
                    />
                  ))}
              </div>
            </div>
            <Tag locale={locale} tags={getUniqueTags(agent_products)} />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
