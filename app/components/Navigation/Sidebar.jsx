"use client"
/********* UTILS & HELPERS **********/
import { menuOptions } from "@/app/utils";
import Link from "next/link";

const Sidebar = ({ isSidebarOpen = false }) => {
 if(isSidebarOpen)
  return (
     <section className="lg:hidden pb-4 flex flex-col justify-center items-center">
        <ul className="flex flex-col gap-4 text-black">
         {
            menuOptions.map((option,index)=>(
               <Link className="text-center" href={'/'} key={index}>{option}</Link>
            ))
         }
        </ul>
     </section>
  );
};

export default Sidebar;
