import Breadcrumb from "@/Components/Breadcrumb";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Contacts() {
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact us",
      url: "#",
    },
  ];

  const { data } = usePage().props;

  console.log(data);

  return (
    <>
      <Head title="Al Arabia for Service Development" />
      <AppLayout>
        <Breadcrumb title="Contact Us" items={items} />
        <h2 className="mx-5 lg:mx-20 py-10 text-4xl">
          Contact us to solve any doubt.
        </h2>
        <div className="grid grid-col-1 lg:grid-cols-3 mx-5 lg:mx-20 lg:gap-20">
          <div className="flex flex-col bg-[#f8f8f8] p-5 items-center gap-1">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="mail"
              >
                <polyline
                  fill="none"
                  stroke="#000"
                  points="1.4,6.5 10,11 18.6,6.5"
                ></polyline>
                <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path>
              </svg>
            </div>
            <p className="text-sm text-primary">Email</p>
            <a
              className="underline hover:decoration-primary"
              href={`mailto:${data.email}`}
            >
              {data.email}
            </a>
            <a
              className="underline hover:decoration-primary"
              href={`mailto:${data["email-management"]}`}
            >
              {data["email-management"]}
            </a>
          </div>
          <div className="flex flex-col bg-[#f8f8f8] p-5 items-center gap-1">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="receiver"
              >
                <path
                  fill="none"
                  stroke="#000"
                  stroke-width="1.01"
                  d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"
                ></path>
              </svg>
            </div>
            <p className="text-sm text-primary">Customer Support</p>
            <a
              className="underline hover:decoration-primary"
              href={`tel:${data.mob}`}
            >
              {data.mob}
            </a>
          </div>
          <div className="flex flex-col bg-[#f8f8f8] p-5 items-center gap-1">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                data-svg="home"
              >
                <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"></polygon>
                <polygon points="15 4 18 4 18 7 17 7 17 5 15 5"></polygon>
                <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"></polygon>
              </svg>
            </div>
            <p className="text-sm text-primary">Address</p>
            <a
              className="text-center"
              href={`address:${data["address-management"]}`}
            >
              {data["address-management"]}
            </a>
          </div>
        </div>
        <div className="mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13807.282185727736!2d31.279549!3d30.0993254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fc51d46be73%3A0xdbb593e25b6a66b!2z2YXYsdmD2LIg2K7Yr9mF2Kkg2YjYtdmK2KfZhtmHINin2YTYtNix2YPYqSDYp9mE2LnYsdio2YrYqSDZhNiq2YbZhdmK2Kkg2KfZhNiu2K_Zhdin2Ko!5e0!3m2!1sen!2seg!4v1698703417759!5m2!1sen!2seg"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
      </AppLayout>
    </>
  );
}
