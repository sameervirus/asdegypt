import FeatureProducts from "@/Features/Home/FeatureProducts";
import MainSlider from "@/Features/Home/MainSlider";
import MainSlider2 from "@/Features/Home/MainSlider2";
import RedBanner from "@/Features/Home/RedBanner";
import ServiceSection from "@/Features/Home/ServiceSection";
import AppLayout from "@/Layouts/AppLayout";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ sliders, pages, features }) {
  return (
    <>
      <Head title="Home" />
      <HomeLayout>
        <MainSlider2 sliders={sliders} />
        {/* <RedBanner pages={pages} />
        <FeatureProducts features={features} />
        <ServiceSection /> */}
      </HomeLayout>
    </>
  );
}
