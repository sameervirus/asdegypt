import FeatureProducts from "@/Features/Home/FeatureProducts";
import MainSlider from "@/Features/Home/MainSlider";
import RedBanner from "@/Features/Home/RedBanner";
import ServiceSection from "@/Features/Home/ServiceSection";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ sliders, pages, features }) {
  return (
    <>
      <Head title="Home" />
      <AppLayout>
        <MainSlider sliders={sliders} />
        <RedBanner pages={pages} />
        <FeatureProducts features={features} />
        <ServiceSection />
      </AppLayout>
    </>
  );
}
