"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "./Sidebar";
import { Menu, MenuIcon } from "lucide-react";
import ModeSwitch from "./Navbar/modeswitch/ModeSwitch";
import Link from "next/link";
import { sidebarData } from "@/constants";
import { usePathname } from "next/navigation";

const MobileSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Button onClick={toggleDrawer(true)}>
        <Menu size={30} className="cursor-pointer" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="bg-slate-800 text-white h-full">
          <div className="w-full flex items-center justify-center pb-10 p-5">
            <ModeSwitch />
          </div>
          {sidebarData.map(link => {
            const isActive =
              pathname === link.route || pathname.startsWith(link.route);

            return (
              <Link
                href={link.route}
                key={link.label}
                className={`flex justify-start pl-5 gap-7 font-bold items-center p-4 rounded-lg hover:bg-slate-400 hover:text-slate-500 ${isActive
                  ? "bg-blue-400"
                  : null}`}
              >
                {link.img}
                {link.label}
              </Link>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
