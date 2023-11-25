import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { __ } from "@/Util/lang";
import { Head, router } from "@inertiajs/react";
import React, { useRef, useState } from "react";

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
  const formRef = useRef();
  const [formData, setFormData] = useState({
    serial: "",
    purchaseDate: "",
    name: "",
    files: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

    // Validate file size
    const isValidSize = Array.from(selectedFiles).every(
      (file) => file.size <= maxFileSize,
    );

    if (isValidSize) {
      setFormData({ ...formData, files: selectedFiles });
    } else {
      // Handle validation error, e.g., show an error message to the user
      alert("File size exceeds the limit (5 MB). Please choose smaller files.");
      // Clear the file input field
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Server-side validation
    const requiredFields = ["serial", "purchaseDate", "name", "files"];
    const isFormValid = requiredFields.every((field) => {
      const value = formData[field];
      if (typeof value === "string") {
        return value.trim() !== "";
      } else {
        return !!value; // Check if the value is truthy (not undefined, null, or false)
      }
    });

    const isFilesValid = formData.files.length > 0;

    if (isFormValid && isFilesValid) {
      const formDataToSend = new FormData();
      formDataToSend.append("serial", formData.serial);
      formDataToSend.append("purchase_date", formData.purchaseDate);
      formDataToSend.append("name", formData.name);

      // Append each file to the FormData
      for (let i = 0; i < formData.files.length; i++) {
        formDataToSend.append("files[]", formData.files[i]);
      }

      router.post("/product-registration", formDataToSend, {
        onSuccess: (res) => {
          setFormData({
            serial: "",
            purchaseDate: "",
            name: "",
            files: [],
          });
          formRef.current.reset();
          alert("Success register");
        },
        onError: (errors) => {
          console.error("Registration failed:", errors);
          // setErrorMessages(errors.response.data.errors);
          alert("Registration failed. Please check your inputs and try again.");
        },
      });
    } else {
      // Handle validation error, e.g., show an error message to the user
      alert("Please fill in all required fields and select at least one file.");
    }
  };

  return (
    <>
      <Head title={__("Product Registration")} />
      <AppLayout>
        <Breadcrumb title={__("Product Registration")} items={items} />
        <div className="container mx-auto mt-8 max-w-2xl">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                {__("client")}
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
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="serial"
                  className="block text-sm font-medium text-gray-600"
                >
                  {__("serial")}
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
              <div className="mb-4">
                <label
                  htmlFor="purchaseDate"
                  className="block text-sm font-medium text-gray-600"
                >
                  {__("purchaseDate")}
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="files"
                className="block text-sm font-medium text-gray-600"
              >
                {__("filesUpload")}
              </label>
              <input
                type="file"
                id="files"
                name="files"
                onChange={handleFileChange}
                multiple // Allow multiple file selection
                accept="image/*,video/*" // Accept images and videos
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                {__("Submit")}
              </button>
            </div>
          </form>
        </div>
      </AppLayout>
    </>
  );
}
