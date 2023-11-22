import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import {
  capitalizeEachWord,
  capitalizeFirstLetter,
  decodeHTML,
} from "@/Util/Helpers";
import FsLightbox from "fslightbox-react";
import "./model.css";
import { __ } from "@/Util/lang";
import { Carousel } from "react-responsive-carousel";

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

export default function Model({ product, agent_products, images, fav_image }) {
  const { products, locale } = usePage().props;
  const categories = getDistinctObjects(products);
  const [mainImage, setMainImage] = useState(fav_image);
  const [toggler, setToggler] = useState(false);
  const [zoomImages, setZoomImages] = useState(
    images?.map((image) => image?.original),
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

  console.log(images);

  return (
    <>
      <Head
        title={
          locale === "ar"
            ? capitalizeEachWord(product.model_ar)
            : capitalizeEachWord(product.model)
        }
      />
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
                    {locale === "ar"
                      ? cat.agent_ar
                      : cat.agent?.replace("_", " ")}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="block lg:hidden bg-primary text-white">
          <Link
            className="flex flex-wrap items-center p-3"
            href={`/products/${product.agent}/${product.category}`}
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
              ? product.category_ar
              : capitalizeFirstLetter(product.category)}
          </Link>
        </div>
        <div className="mt-[-8px] py-5 px-5 lg:py-5 lg:px-10 mb-10">
          <div className="hidden lg:flex text-sm mb-4">
            <Link href={`/products/${product.agent}`}>
              {locale === "ar"
                ? capitalizeEachWord(product.agent_ar)
                : capitalizeEachWord(product.agent)}
            </Link>
            <span className="px-2">/</span>
            <Link href={`/products/${product.agent}/${product.category}`}>
              {locale === "ar"
                ? capitalizeEachWord(product.category_ar)
                : capitalizeEachWord(product.category)}
            </Link>
            <span className="px-2">/</span>
            <span>
              {locale === "ar"
                ? capitalizeEachWord(product.model_ar)
                : capitalizeEachWord(product.model)}
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div
              className="col-span-12 lg:col-span-9"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-1">
                <div className="hidden lg:block col-span-5 lg:col-span-2">
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-1">
                      <div className="flex flex-col gap-2">
                        {images?.length > 0 &&
                          images?.map((img) => (
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
                        {__("Data Sheets")}:
                      </h3>
                      <div id="">
                        <a
                          href={`//${product.data_sheet}`}
                          target="_blank"
                          className="underline"
                        >
                          {__("Download")}
                        </a>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex lg:hidden">
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    className="carouselClass"
                    emulateTouch={false}
                    swipeable={false}
                  >
                    {images?.length > 0 &&
                      images?.map((img) => (
                        <div key={img.id}>
                          <div className="p-4">
                            <img src={img.original} />
                          </div>
                        </div>
                      ))}
                  </Carousel>
                </div>
                <div className="model ps-4 col-span-5 lg:col-span-3 mt-10 lg:mt-0">
                  <div>
                    <h2
                      itemProp="name"
                      className="text-primary uppercase text-2xl lg:text-4xl font-semibold"
                    >
                      {locale === "ar"
                        ? capitalizeEachWord(product.model_ar)
                        : capitalizeEachWord(product.model)}
                    </h2>
                    <p className="mb-4">
                      {locale === "ar"
                        ? capitalizeEachWord(product.agent_ar)
                        : capitalizeEachWord(product.agent)}{" "}
                      -{" "}
                      {locale === "ar"
                        ? capitalizeEachWord(product.category_ar)
                        : capitalizeEachWord(product.category)}
                    </p>
                    <h3
                      itemProp="description"
                      className="mb-4 font-bold text-2xl text-primary"
                    >
                      {__("Descriptions")}:
                    </h3>
                    <div className="mb-8">
                      {product.features && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: decodeHTML(
                              locale === "ar"
                                ? product.features_ar
                                : product.features,
                            ),
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
                          {__("Technical Data")}:
                        </h3>
                        <div id="data_sheet_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(
                                locale === "ar"
                                  ? product.technical_data_ar
                                  : product.technical_data,
                              ),
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
                          {__("Accessories")}:
                        </h3>
                        <div id="accessories_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(
                                locale === "ar"
                                  ? product.accessories_ar
                                  : product.accessories,
                              ),
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
                          {"Optional"}:
                        </h3>
                        <div id="optional_div">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: decodeHTML(
                                locale === "ar"
                                  ? product.optional_ar
                                  : product.optional,
                              ),
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
                    {locale === "ar"
                      ? capitalizeEachWord(product.agent_ar)
                      : capitalizeEachWord(product.agent)}{" "}
                    /{" "}
                    {locale === "ar"
                      ? capitalizeEachWord(product.category_ar)
                      : capitalizeEachWord(product.category)}
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
                        {locale === "ar"
                          ? capitalizeEachWord(p.model_ar)
                          : capitalizeEachWord(p.model)}
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
