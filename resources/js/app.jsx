import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "ASDEgypt";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx"),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);

    const { initialPage } = props;
    if (initialPage.props.locale === "ar") {
      import("../css/arabic.css");
    }
  },
  progress: {
    color: "#4B5563",
  },
});
