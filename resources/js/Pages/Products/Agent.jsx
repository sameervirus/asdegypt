import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { capitalizeFirstLetter, capitalizeEachWord } from "@/Util/Helpers";

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
  console.log(agent_products);
  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <div className="mt-10">
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
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {agent_products &&
                  agent_products.map((c) => (
                    <div key={c.id} className="card p-5 bg-white relative">
                      <div className="p-5">
                        <img
                          src={`https://asdegypt.com/images/${c.agent}/${c.model}/small_${c.model}.jpg`}
                          height="468"
                          width="468"
                          alt="INVERTER"
                          className="hover:scale-125 transition-all delay-400"
                        />
                      </div>
                      <h2 className="text-sm font-semibold">
                        {capitalizeEachWord(c.category)}
                      </h2>
                      <Link
                        href={`/products/${c.agent}/${c.category}`}
                        className=" absolute top-0 start-0 h-full w-full"
                      ></Link>
                    </div>
                  ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-3">4</div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
