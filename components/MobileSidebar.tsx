// "use client";

// import * as React from "react";
// import Drawer from "@mui/material/Drawer";
// import { Menu } from "lucide-react";
// import ModeSwitch from "./Navbar/modeswitch/ModeSwitch";
// import Link from "next/link";
// import { sidebarData } from "@/constants";
// import { usePathname } from "next/navigation";

// const MobileSidebar = () => {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };

//   const closeDrawer = () => {
//     setOpen(false);
//   };

//   const pathname = usePathname();

//   return (
//     <div className="md:hidden">
//       <Menu size={30} className="cursor-pointer" onClick={toggleDrawer(true)} />
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         <div className="bg-slate-800 text-white overflow-auto h-full">
//           <div className="w-full flex gap-3 items-center justify-center pb-10 p-5">
//             <span className="text-xl">Theme -</span>
//             <ModeSwitch />
//           </div>
//           {sidebarData.map(link => {
//             const isActive = pathname === link.route;

//             return (
//               <Link
//                 href={link.route}
//                 key={link.label}
//                 onClick={closeDrawer}
//                 className={`flex justify-start pl-5 gap-7 font-bold items-center p-4 rounded-lg hover:text-slate-300 ${isActive
//                   ? "bg-blue-400"
//                   : null}`}
//               >
//                 {link.img}
//                 {link.label}
//               </Link>
//             );
//           })}
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default MobileSidebar;

"use client";

import { sidebarData } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden sm:px-5 fixed bottom-0 left-0 w-full p-2 bg-slate-800 flex justify-between items-center">
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
