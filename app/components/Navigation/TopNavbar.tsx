"use client";
import { useState, useRef, FC } from "react";
/********* COMPONENTS **********/
import Sidebar from "./Sidebar";
import TopNavDropdown from "./TopNavDropdown";
/******** INTERFACES **********/
import { MenuOptionsInterface, TopNavbarProps } from '../../utils/interfaces';
/********* ICONS , HELPERS & UTILS  **********/
import Lottie,{ LottieRefCurrentProps } from "lottie-react";
import animationData from "../../../public/burger-menu.json";
import { menuOptions,APP_NAME } from "../../utils";
import Link from "next/link";

const TopNavbar : FC <TopNavbarProps> = ({ pageTitle = APP_NAME }) => {
  const animationRef = useRef<LottieRefCurrentProps>(null)
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    if (animationRef.current) {
      if (isSidebarOpen) {
        animationRef.current.playSegments([40, 90], true);
      } else {
        animationRef.current.playSegments([0, 40], true);
      }
    }
  };

  return (
    <nav className="bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="hidden lg:block text-black font-bold text-lg">
              {APP_NAME}
            </p>
            <p className="lg:hidden text-black font-bold text-lg">
              {pageTitle}
            </p>
          </div>

          <div className="hidden sm:block">
            <div className="ml-10 flex items-center items-baseline space-x-4 text-black">
              {menuOptions.map((option : MenuOptionsInterface, index) =>
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
                    <TopNavDropdown
                      isDropdownOpen={isDropdownOpen}
                      key={index}
                      options={option.subOptions}
                    />
                  </div>
                ) : (
                  <Link
                    className={`${
                      pageTitle === option.label &&
                      `underline underline-offset-2`
                    } hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium`}
                    href={option.url!}
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
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={false}
                lottieRef={animationRef}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} pageTitle={pageTitle} />
    </nav>
  );
};

export default TopNavbar;
