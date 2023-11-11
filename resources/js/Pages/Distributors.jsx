import React, { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";

export default function Distributors({ distributors }) {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Distributors",
      url: "#",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
  ];

  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <Breadcrumb title="Distributors" items={items} />
        <div className="bg-[#f8f8f8] py-4 mb-4">
          <div className="container my-24 mx-auto md:px-6">
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
