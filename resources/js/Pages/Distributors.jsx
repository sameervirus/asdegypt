import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { __ } from "@/Util/lang";

export default function Distributors({ distributors }) {
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("Distributors"),
      url: "#",
    },
  ];

  const { locale } = usePage().props;

  const columns = [
    {
      name: __("Name"),
      selector: (row) => (locale === "ar" ? row.name_ar : row.name),
      sortable: true,
    },
    {
      name: __("Address"),
      selector: (row) => (locale === "ar" ? row.address_ar : row.address),
      sortable: true,
    },
    {
      name: __("City"),
      selector: (row) => (locale === "ar" ? row.city_ar : row.city),
      sortable: true,
    },
    {
      name: __("Phone"),
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: __("Location"),
      selector: (row) => row.location,
      sortable: true,
    },
  ];

  return (
    <>
      <Head title={__("Distributors")} />
      <AppLayout>
        <Breadcrumb title={__("Distributors")} items={items} />
        <div className="bg-[#f8f8f8] py-4 mb-4">
          <div className="container lg:my-24 mx-auto md:px-6">
            <DataTable
              columns={columns}
              data={distributors}
              pagination
              responsive
              striped
            />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
