import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import { capitalizeEachWord, toTitleCase } from "@/Util/Helpers";

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

export default function Category({ product, agent_products }) {
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <div className="top-nav mt-10">
          <ul
            className="about-tabs flex flex-wrap -mb-px text-sm font-bold uppercase text-center px-5 lg:px-10"
            id="default-tab"
            role="tablist"
          >
            {categories &&
              agent_products &&
              categories?.map((cat) => (
                <li
                  key={cat.id}
                  className={`ml-[1px] ${
                    cat.agent === agent_products[0].agent ? "active" : ""
                  }`}
                  role="presentation"
                >
                  <Link
                    className={`inline-block px-4 py-2 uppercase hover:text-primary ${cat.agent}`}
                    href={`/products/${cat.agent}`}
                  >
                    {cat.agent?.replace("_", " ")}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="mt-[-8px] py-5 px-5 lg:py-5 lg:px-10 mb-10">
          <div className="flex text-sm mb-4">
            <Link href={`/products/${product.agent}`}>
              {capitalizeEachWord(product.agent)}
            </Link>
            <span className="px-2">/</span>
            <Link href={`/products/${product.agent}/${product.category}`}>
              {capitalizeEachWord(product.category)}
            </Link>
            <span className="px-2">/</span>
            <span>{capitalizeEachWord(product.model)}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-9">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                <div className="col-span-12 lg:col-span-1">1</div>
                <div className="col-span-12 lg:col-span-2">2</div>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-3">
              <div className="w-full p-5 bg-[#00000005] relative">
                <ul>
                  <li className="underline font-bold text-2xl mb-2">
                    {capitalizeEachWord(product.agent)} /{" "}
                    {capitalizeEachWord(product.category)}
                  </li>
                  {agent_products?.map((p) => (
                    <li
                      key={p.id}
                      className="py-1 hover:text-primary uppercase font-semibold"
                    >
                      <a
                        className={
                          p.model === product.model ? "text-primary" : ""
                        }
                        href={`/products/${p.agent}/${p.category}/${p.model}`}
                      >
                        {toTitleCase(p.model)}
                      </a>
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
