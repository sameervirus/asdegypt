import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import {
  capitalizeEachWord,
  capitalizeFirstLetter,
  toTitleCase,
} from "@/Util/Helpers";
import ProductHead from "@/Features/ProductHead";

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

export default function Category({ agent_products, agent_categories }) {
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
        <div className="block lg:hidden mt-10 bg-primary text-white">
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
            >
              <polyline
                fill="none"
                stroke="#fff"
                strokeWidth="1.03"
                points="13 16 7 10 13 4"
              ></polyline>
            </svg>
            {locale === "ar"
              ? agent_products[0].agent
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
                {agent_products &&
                  agent_products.map((c) => (
                    <div
                      key={c.id}
                      className="bg-white card flex items-center lg:block lg:p-5 relative border-b-2 border-[#00000005] lg:border-0"
                    >
                      <Link
                        href={`/products/${c.agent}/${c.category}/${c.model}`}
                        className="overlay absolute top-0 start-0 h-full w-full"
                      ></Link>
                      <div className="lg:p-5 card-img">
                        <img
                          src={`https://asdegypt.com/images/${c.agent}/${c.model}/small_${c.model}.jpg`}
                          height="468"
                          width="468"
                          alt="INVERTER"
                        />
                      </div>
                      <h2 className="text-sm font-semibold ms-4 lg:ms-0">
                        {locale === "ar"
                          ? c.model_ar
                          : capitalizeEachWord(c.model)}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-3">
              <div className="w-full p-5 bg-white relative">
                <ul>
                  <li className="underline font-bold text-2xl mb-2">
                    {locale === "ar"
                      ? agent_products[0].agent_ar
                      : capitalizeFirstLetter(agent_products[0].agent)}
                  </li>
                  {agent_categories?.map((p) => (
                    <li
                      key={p.id}
                      className="py-1 hover:text-primary uppercase font-semibold"
                    >
                      <Link
                        className={
                          p.category === agent_products[0].category
                            ? "text-primary"
                            : ""
                        }
                        href={`/products/${p.agent}/${p.category}`}
                      >
                        {locale === "ar"
                          ? p.category_ar
                          : toTitleCase(p.category)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
