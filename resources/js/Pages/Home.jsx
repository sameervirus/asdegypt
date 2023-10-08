import MainSlider from "@/Features/Home/MainSlider";
import AppLayout from "@/Layouts/AppLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ sliders }) {
  return (
    <>
      <Head title="Welcome" />
      <AppLayout>
        <MainSlider sliders={sliders} />
      </AppLayout>
    </>
  );
}
