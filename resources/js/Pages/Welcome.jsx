import AppLayout from "@/Layouts/AppLayout";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Welcome" />
      <AppLayout></AppLayout>
    </>
  );
}
