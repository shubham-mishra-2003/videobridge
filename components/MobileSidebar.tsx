"use client";

import { sidebarData } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden sm:px-5 absolute bottom-0 left-0 w-full p-2 bg-slate-800 flex justify-between items-center">
      {sidebarData.map(link => {
        const isActive = pathname === link.route;

        return (
          <Link
            href={link.route}
            key={link.label}
            className={`flex justify-start gap-7 font-bold items-center p-3 rounded-full text-white ${isActive
              ? "bg-blue-400 text-gray-900"
              : null}`}
            title={link.title}
          >
            {link.img}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileSidebar;
