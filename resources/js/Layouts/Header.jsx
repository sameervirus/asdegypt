import ApplicationLogo from "@/Components/ApplicationLogo";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import SearchIcon from "@/Components/SearchIcon";
import React from "react";
import MainMenu from "./MainMenu";

export default function Header({ setOpenPanel, setMenuPanel }) {
  return (
    <div className="flex justify-between lg:px-10 px-2 py-1">
      <div className="">
        <ApplicationLogo />
      </div>
      <div className="flex-col hidden items-end justify-between lg:flex">
        <div className="flex">
          <LanguageSwitcher />
          <SearchIcon
            setOpenPanel={setOpenPanel}
            props="mx-2 bg-[#e1001a] p-2"
            stroke="#ffffff"
          />
        </div>
        <div className="flex">
          <MainMenu />
        </div>
      </div>
      <div className="flex gap-2 items-center lg:hidden">
        <SearchIcon
          setOpenPanel={setOpenPanel}
          props="text-[#e1001a] p-2"
          stroke="#e1001a"
        />
        <a className="" href="#" onClick={() => setMenuPanel(true)}>
          <svg
            className="w-[27px] h-auto"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#e1001a"
          >
            <rect x="2" y="4" width="16" height="1"></rect>
            <rect x="2" y="9" width="16" height="1"></rect>
            <rect x="2" y="14" width="16" height="1"></rect>
          </svg>
        </a>
      </div>
    </div>
  );
}
