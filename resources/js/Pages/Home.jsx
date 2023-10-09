import MainSlider from "@/Features/Home/MainSlider";
import RedBanner from "@/Features/Home/RedBanner";
import AppLayout from "@/Layouts/AppLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ sliders, pages }) {
  return (
    <>
      <Head title="Welcome" />
      <AppLayout>
        <MainSlider sliders={sliders} />
        <RedBanner pages={pages} />
      </AppLayout>
    </>
  );
}
