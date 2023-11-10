import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { capitalizeEachWord, toTitleCase } from "@/Util/Helpers";
import FsLightbox from "fslightbox-react";
import "./model.css";

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

export default function Model({ product, agent_products, images }) {
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  const [mainImage, setMainImage] = useState(
    images?.data?.length > 0 && images?.data[0]["original"],
  );
  const [toggler, setToggler] = useState(false);
  const [zoomImages, setZoomImages] = useState(
    images?.data?.map((image) => image?.original),
  );

  const handleZoom = (selected) => {
    if (zoomImages.length > 0) {
      const selectedIndex = zoomImages.indexOf(selected);

      if (selectedIndex !== -1) {
        const reorderedImages = [
          zoomImages[selectedIndex],
          ...zoomImages.slice(0, selectedIndex),
          ...zoomImages.slice(selectedIndex + 1),
        ];

        setZoomImages(reorderedImages);
        setToggler(!toggler);
      }
    }
  };

  const decodeHTML = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  console.log(product);

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
            <div
              className="col-span-12 lg:col-span-9"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
                <div className="col-span-5 lg:col-span-2">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-1">
                      <div className="flex flex-col gap-2">
                        {images?.data?.length > 0 &&
                          images?.data?.map((img) => (
                            <img
                              key={img.id}
                              className="border border-gray-300 rounded-lg hover:shadow hover:shadow-blue-500/40 active:shadow active:shadow-blue-500/40 cursor-pointer"
                              src={img.thumbnail}
                              onMouseEnter={() => setMainImage(img.original)}
                            />
                          ))}
                      </div>
                    </div>
                    <div className="col-span-5">
                      <img
                        className=" cursor-zoom-in"
                        src={mainImage}
                        onClick={() => handleZoom(mainImage)}
                      />
                    </div>
                  </div>
                  {product.data_sheet && (
                    <>
                      <hr className="my-8" />
                      <h3 className="mb-4 font-bold text-2xl text-primary">
                        Data Sheets:
                      </h3>
                      <div id="">
                        <a
                          href={`//${product.data_sheet}`}
                          target="_blank"
                          className="underline"
                        >
                          download
                        </a>
                      </div>
                    </>
                  )}
                </div>
                <div className="model ps-4 col-span-5 lg:col-span-3">
                  <div>
                    <h2
                      itemProp="name"
                      className="text-primary uppercase text-4xl font-semibold"
                    >
                      {capitalizeEachWord(product.model)}
                    </h2>
                    <p className="mb-4">
                      {capitalizeEachWord(product.agent)} -{" "}
                      {capitalizeEachWord(product.category)}
                    </p>
                    <h3
                      itemProp="description"
                      className="mb-4 font-bold text-2xl text-primary"
                    >
                      Descriptions:
                    </h3>
                    <div className="mb-8">
                      {product.features && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: decodeHTML(product.features),
                          }}
                        />
                      )}
                    </div>
                    <hr />

                    {product.technical_data && (
                      <>
                        <h3
                          itemProp="feature"
                          className="mb-4 font-bold text-2xl text-primary"
                        >
                          Technical Data:
                        </h3>
                        <div id="data_sheet_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(product.technical_data),
                            }}
                          />
                        </div>
                        <hr />
                      </>
                    )}

                    {product.accessories && (
                      <>
                        <h3
                          itemProp="accessories"
                          className="mb-4 font-bold text-2xl text-primary"
                        >
                          Accessories:
                        </h3>
                        <div id="accessories_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(product.accessories),
                            }}
                          />
                        </div>
                        <hr />
                      </>
                    )}

                    {product.optional && (
                      <>
                        <h3
                          itemProp="optional"
                          className="mb-4 font-bold text-2xl text-primary"
                        >
                          Optional:
                        </h3>
                        <div id="optional_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(product.optional),
                            }}
                          />
                        </div>
                        <hr />
                      </>
                    )}
                  </div>
                </div>
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
                      <Link
                        className={
                          p.model === product.model ? "text-primary" : ""
                        }
                        href={`/products/${p.agent}/${p.category}/${p.model}`}
                      >
                        {toTitleCase(p.model)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FsLightbox toggler={toggler} sources={zoomImages} />
      </AppLayout>
    </>
  );
}
