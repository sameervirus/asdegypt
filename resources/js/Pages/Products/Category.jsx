import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import {
  capitalizeEachWord,
  capitalizeFirstLetter,
  getUniqueTags,
  toTitleCase,
} from "@/Util/Helpers";
import ProductHead from "@/Features/ProductHead";
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

export default function Category({ agent_products }) {
  const { products, locale } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <Head
        title={
          locale === "ar"
            ? capitalizeEachWord(agent_products[0].category_ar)
            : capitalizeEachWord(agent_products[0].category)
        }
      />
      <AppLayout>
        <div className="block lg:hidden bg-primary text-white">
          <Link
            className="flex flex-wrap items-center p-3"
            href={`/products/${agent_products[0].agent}`}
          >
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
            {locale === "ar"
              ? agent_products[0].agent_ar
              : capitalizeFirstLetter(agent_products[0].agent)}
          </Link>
        </div>
        <ProductHead
          categories={categories}
          agent_products={agent_products}
          locale={locale}
        />
        <div className="mt-[-8px] py-5 px-5 lg:py-5 lg:px-10 mb-10 bg-[#00000005]">
          <h1 className="flex flex-wrap items-center text-primary text-3xl font-bold mb-4">
            <Link
              className="hidden lg:block me-2"
              href={`/products/${agent_products[0].agent}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="chevron-left"
              >
                <polyline
                  fill="none"
                  stroke="#e1001a"
                  strokeWidth="1.03"
                  points="13 16 7 10 13 4"
                ></polyline>
              </svg>
            </Link>
            {locale === "ar"
              ? agent_products[0].category_ar
              : capitalizeEachWord(agent_products[0].category)}
          </h1>
          <div className="hidden lg:flex text-sm mb-4">
            <Link href={`/products/${agent_products[0].agent}`}>
              {locale === "ar"
                ? agent_products[0].agent_ar
                : capitalizeFirstLetter(agent_products[0].agent)}
            </Link>
            <span className="px-2">/</span>
            <span>
              {locale === "ar"
                ? agent_products[0].category_ar
                : capitalizeEachWord(agent_products[0].category)}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-12 lg:gap-4">
            <div className="col-span-6 lg:col-span-9">
              <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4">
                {agent_products &&
                  agent_products.map((c) =>
                    c.fav_image !== null ? (
                      <ImageCard
                        key={c.id}
                        locale={locale}
                        url={`/products/${c.agent}/${c.category}/${c.model}`}
                        favImage={c.fav_image}
                        name={c.model}
                        name_ar={c.model_ar}
                      />
                    ) : null,
                  )}
              </div>
            </div>
            <Tag locale={locale} tags={getUniqueTags(agent_products)} />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
