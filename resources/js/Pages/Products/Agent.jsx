import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";
import {
  capitalizeFirstLetter,
  capitalizeEachWord,
  toTitleCase,
} from "@/Util/Helpers";

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
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <div className="block lg:hidden mt-10 bg-primary text-white">
          <Link className="flex flex-wrap items-center p-3" href={`/products`}>
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
            Products
          </Link>
        </div>
        <div className="hidden lg:block top-nav mt-10">
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
        <div className="mt-[-8px] py-5 px-5 lg:py-5 lg:px-10 mb-10 bg-[#00000005]">
          <h1 className="text-primary text-3xl font-bold mb-4">
            {capitalizeFirstLetter(agent_products[0].agent)}
          </h1>
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
                        href={`/products/${c.agent}/${c.category}`}
                        className="overlay absolute top-0 start-0 h-full w-full"
                      ></Link>
                      <div className="lg:p-5 card-img">
                        <img
                          src={`https://asdegypt.com/images/${c.agent}/${c.model}/small_${c.model}.jpg`}
                          alt="INVERTER"
                        />
                      </div>
                      <h2 className="text-sm font-semibold ms-4 lg:ms-0">
                        {capitalizeEachWord(c.category)}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-3">
              <div className="w-full p-5 bg-white relative">
                <ul>
                  {categories?.map((category) => (
                    <li
                      key={category.id}
                      className="py-1 hover:text-primary uppercase font-semibold"
                    >
                      <Link
                        className={
                          category.agent === agent_products[0].agent
                            ? "text-primary"
                            : ""
                        }
                        href={`/products/${category.agent}`}
                      >
                        {toTitleCase(category.agent)}
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
