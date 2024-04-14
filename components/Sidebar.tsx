"use client";

import { sidebarData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full pt-28 lg:w-[260px] w-fit sticky top-0 left-0 flex-col justify-between bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarData.map(link => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex justify-start pl-5 gap-7 font-bold items-center p-4 rounded-lg hover:text-slate-500 ${isActive
                ? "bg-blue-500"
                : null}`}
            >
              {link.img}
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
