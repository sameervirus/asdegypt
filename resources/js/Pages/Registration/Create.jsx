import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Util/lang";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create() {
  const items = [
    {
      name: __("Home"),
      url: "/",
    },
    {
      name: __("Product Registration"),
      url: "#",
    },
  ];
  const [formData, setFormData] = useState({
    product: "",
    serial: "",
    purchaseDate: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Server-side validation
    const requiredFields = [
      "product",
      "serial",
      "purchaseDate",
      "name",
      "email",
      "phone",
      "city",
      "country",
    ];
    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== "",
    );

    if (isFormValid) {
      router.post("/product-registration", formData);
    } else {
      // Handle validation error, e.g., show an error message to the user
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <Head title={__("Product Registration")} />
      <AppLayout>
        <Breadcrumb title={__("Product Registration")} items={items} />
        <div className="container mx-auto mt-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-gray-600"
                >
                  Product
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="serial"
                  className="block text-sm font-medium text-gray-600"
                >
                  Serial
                </label>
                <input
                  type="text"
                  id="serial"
                  name="serial"
                  value={formData.serial}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="purchaseDate"
                  className="block text-sm font-medium text-gray-600"
                >
                  Purchase Date
                </label>
                <input
                  type="date"
                  id="purchaseDate"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
                Address (Optional)
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-600"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-600"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </AppLayout>
    </>
  );
}
