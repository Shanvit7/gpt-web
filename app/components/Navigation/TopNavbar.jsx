"use client";
import { useState } from "react";
/********* COMPONENTS **********/
import Sidebar from "./Sidebar";
import TopNavDropdown from "./TopNavDropdown";
/********* ICONS , HELPERS & UTILS  **********/
import Hamburger from "../Icons/Hamburger";
import Cross from "../Icons/Cross";
import { menuOptions } from "@/app/utils";
import Link from "next/link";

const TopNavbar = ({ pageTitle = "College GPT" }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen,setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <nav className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="hidden lg:block text-black font-bold text-lg">
              College GPT
            </p>
            <p className="lg:hidden text-black font-bold text-lg">
              {pageTitle}
            </p>
          </div>

          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-4 text-black">
              {menuOptions.map((option, index) =>
                option.subOptions ? (
                    <div
                      key={index}
                      onClick={toggleDropdown}
                      className={`${
                        pageTitle === option.label &&
                        `underline underline-offset-2`
                      } cursor-pointer hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                    >
                      {option.label}
                      <TopNavDropdown isDropdownOpen={isDropdownOpen} key={index} options={option.subOptions} />
                    </div>
                ) : (
                  <Link
                    className={`${
                      pageTitle === option.label &&
                      `underline underline-offset-2`
                    } hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium`}
                    href={option.url}
                    key={index}
                  >
                    {option.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={handleSidebar}
              type="button"
              className="text-black hover:text-gray-600 focus:outline-none focus:text-black"
            >
              {isSidebarOpen ? <Cross /> : <Hamburger />}
            </button>
          </div>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} pageTitle={pageTitle} />
    </nav>
  );
};

export default TopNavbar;
