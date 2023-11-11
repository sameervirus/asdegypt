import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";

export default function Reference() {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Reference",
      url: "#",
    },
  ];

  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <Breadcrumb title="Reference" items={items} />
        <div className="bg-[#f8f8f8] py-4 mb-4">
          <div className="container my-24 mx-auto md:px-6">
            <h1 className="text-primary text-3xl text-center mb-10">
              PREVIOUS WORK BY THE COMPANY ACCOMPLISHING
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl mb-5">Public sector companies:</h2>
                <ul className="ps-8 list-disc text-sm">
                  <li>
                    SUGAR COMPANY EGYPTIAN AND INTEGRATED INDUSTRIES COMPANY
                  </li>
                  <li>ELECTRO CABLE EGYPT COMPANY</li>
                  <li>THE ARAB CONTRACTORS COMPANY</li>
                  <li>DELTA STEEL MILLS COMPANY</li>
                  <li>THE EGYPTIAN STARCH, YEAST &amp; DETERGENTS COMPANY</li>
                  <li>PORT SAID CONTAINER &amp; CARGO HANDLING COMPANY</li>
                  <li>THE EGYPTIAN ELECTRICITY HOLDING COMPANY</li>
                  <li>THE GENERAL AUTHORITY FOR SEWAGE COMPANY</li>
                  <li>GENERAL AUTHORITY FOR MILLS COMPANY</li>
                  <li>EGYPTIAN NATIONAL RAILWAY</li>
                  <li>
                    GENERAL AUTHORITY FOR CLEANNESS &amp; BEAUTIFICATION COMPANY
                  </li>
                  <li>EGYPTIAN GENERAL PETROLEUM CORPORATION</li>
                  <li>ARAB ORGANIZATION FOR INDUSTRIALIZATION</li>
                  <li>PETROSHAHD PETROLEUM COMPANY</li>
                  <li>NATGAS COMPANY</li>
                  <li>HAIDYLENA FOR ADVANCED MEDICAL INDUSTRIES</li>
                  <li>AL FERDAWS FOOD INDUSTRIES MATERIALS COMPANY</li>
                  <li>NILE SUGAR COMPANY</li>
                  <li>FARM FRITES EGYPT COMPANY</li>
                  <li>MADINATY CITY HALL</li>
                  <li>GUARDIAN GLASS INDUSTRIES</li>{" "}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl mb-5">PRIVATE SECTOR COMPANIES:</h2>
                <ul className="ps-8 list-disc text-sm">
                  <li>CRISPY AIR COMPANY</li>
                  <li>YASSIN GROUP</li>
                  <li>DALTEX CORPORATION</li>
                  <li>CIG - COMMERCIAL INTERNATIONAL GROUP</li>
                  <li>NAFEA GROUP (JAC)</li>
                  <li>ALKAN NETWORKS COMPANY</li>
                  <li>ARCO STEEL - ARAB CO. FOR SPECIAL STEEL COMPANY</li>
                  <li>MAADI CO. FOR ENGINEERING INDUSTRIES</li>
                  <li>APEX - MULTI APEX PHARMA COMPANY</li>
                  <li>MAC CARPET COMPANY</li>
                  <li>
                    AL FERDAWS FOOD INDUSTRIES MATERIALS CO. - FIMCOBASE COMPANY
                  </li>
                  <li>KIRIAZI GROUP</li>
                  <li>PACHIN PAINTING COMPANY</li>
                  <li>EL-KADESIA ENGINEERING INDUSTRIES</li>
                  <li>RAMEDA PHARMACEUTICAL INDUSTRIES</li>
                  <li>PSC - PROTECTION SPECIALIST CONTRACTORS COMPANY</li>
                  <li>ABOU ZAABAL FOR SPECIALIZED CHEMICALS - AZC</li>
                  <li>ASFOUR CRYSTAL COMPANY</li>
                  <li>MODERN BAKERIES S. A. E - RICH BAKE</li>
                  <li>EDITA FOOD INDUSTRIES</li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
