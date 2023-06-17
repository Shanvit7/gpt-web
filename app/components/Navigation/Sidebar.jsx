"use client";
/********* UTILS & HELPERS **********/
import { menuOptions } from "@/app/utils";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen = false, pageTitle }) => {
  if (isSidebarOpen)
    return (
      <section className="lg:hidden pb-4 flex flex-col justify-center items-center">
        <ul className="flex flex-col gap-4 text-black text-center">
          {menuOptions.map((option, index) =>
            option.subOptions
              ? option.subOptions.map(
                  (option, index) =>
                    option.label !== pageTitle && (
                      <li className="font-bold" key={index}>
                        <Link href={option.url}>{option.label}</Link>
                      </li>
                    )
                )
              : option.label !== pageTitle && (
                  <li className="font-bold" key={index}>
                    <Link href={option.url}>{option.label}</Link>
                  </li>
                )
          )}
        </ul>
      </section>
    );
};

export default Sidebar;
