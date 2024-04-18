import React from "react";
import ModeSwitch from "./modeswitch/ModeSwitch";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileSidebar from "../MobileSidebar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../public/logo.jpeg";

const Navbar = () => {
  return (
    <div className="flex top-0 left-0 fixed z-10 w-full bg-black items-center justify-between md:px-6 pl-6 pr-2 py-2">
      <div className="text-slate-200">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/videobridge_logo.png"
            width={50}
            height={50}
            alt="Video Bridge Logo"
          />
          <h1 className="md:text-3xl sm:text-2xl text-xl font-extrabold">
            Video<span className="text-blue-500">Bridge</span>
          </h1>
        </Link>
        <h2 className="md:text-lg sm:text-sm text-[10px] font-bold text-gray-400 text-start">
          By Connect | shubham mishra
        </h2>
      </div>
      <div className="flex gap-3 items-center p-1">
        <UserButton />
        <ModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
