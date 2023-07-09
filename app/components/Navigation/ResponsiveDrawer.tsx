"use client";
import {FC} from 'react';
/********* UTILS & HELPERS **********/
import { menuOptions } from "../../utils";
import Link from "next/link";
/********* INTERFACES **********/
import { ResponsiveDrawerProps } from '../../utils/interfaces';

// NOTE : This component will only be visible on mid-size screens on top right (mobile,tablets,etc);

const ResponsiveDrawer : FC <ResponsiveDrawerProps> = ({ isResponsiveDrawerOpen = false, pageTitle }) => {
  if (isResponsiveDrawerOpen)
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
                    <Link href={option.url!}>{typeof option.label === 'string' ? option.label: <option.label/>}</Link>
                  </li>
                )
          )}
        </ul>
      </section>
    );
};

export default ResponsiveDrawer;
