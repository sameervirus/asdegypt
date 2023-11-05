import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";

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
  const { products } = usePage().props;
  const categories = getDistinctObjects(products);
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  console.log(products);
  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <div className="">
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
                    href=""
                  >
                    {cat.agent?.replace("_", " ")}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div
          id="default-tab-content"
          className="mt-[-8px] py-5 lg:py-20 mb-10 bg-black"
        >
          <div
            className={`${activeTab === "profile" ? "block" : "hidden"}`}
            id="profile"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">
                Al Arabia for Service Development
              </h2>
              <div className="">
                Where we specialize in the areas of industrial equipment and
                complementary equipment for production lines, Cleaning and
                disinfection, washing and polishing floors Equipment, Dust and
                water suction machines, Welding machines, battery chargers
                platforms, Car Service Equipment, Counters and product level
                measurement devices, All lubrication equipment and lubrication,
                Air compressors and all kinds of power tools and industrial
                equipment.
              </div>
            </div>
          </div>
          <div
            className={`${activeTab === "provided" ? "block" : "hidden"}`}
            id="provided"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">
                Our Company Provided ....
              </h2>
              <div className="">
                The company is characterized by providing the highest technical
                specifications at unbeatable prices. The company also real
                ensuring all equipment through a team of engineers and
                technicians trained abroad on maintenance and processing
                equipment and provide all original spare parts and due to the
                presence service, maintenance and spare private parts of our
                company only centers.
              </div>
            </div>
          </div>
          <div
            className={`${activeTab === "policy" ? "block" : "hidden"}`}
            id="policy"
            role="tabpanel"
          >
            <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 text-white">
              <h2 className="text-2xl lg:text-4xl mb-5">
                Company's Policy ....
              </h2>
              <div className="">
                Import finest equipment from major European companies, which are
                the company's representation in the Arab Republic of Egypt is
                better represented by major companies testimony in terms of
                after-sales service and technical advice to all the customers
                and the nomination of appropriate equipment that meets the needs
                of the client and staff training on how to use all the
                equipment.
                <br />
                <br />
                The company is characterized by providing the highest technical
                specifications at unbeatable prices. The company also real
                ensuring all equipment through a team of engineers and
                technicians trained abroad on maintenance and processing
                equipment and provide all original spare parts and that the
                existence of the service and maintenance of private and spare
                parts centers Our company only.
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
