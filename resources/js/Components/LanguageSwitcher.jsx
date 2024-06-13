import { router, usePage } from "@inertiajs/react";
import React from "react";

export default function LanguageSwitcher() {
  const { locale } = usePage().props;

  const handleChangeLanguage = (language) => {
    router.post(
      route("language.store"),
      { language },
      {
        onSuccess: () => {
          window.location.reload();
        },
      },
    );
  };

  return (
    <ul className="menu-top flex">
      <li>
        <button onClick={() => handleChangeLanguage("en")}>En</button>
      </li>
      <li>
        <button onClick={() => handleChangeLanguage("ar")}>Ar</button>
      </li>
    </ul>
  );
}
