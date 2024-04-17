import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from 'next';
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VideoBridge | connect",
  description: "Video meeting/calling App made by connect",
  icons: "../videobridge_logo.png"
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full">
        <div className="hidden md:flex p-0">
          <Sidebar />
        </div>
        <section className="flex flex-col px-6 pb-6 pt-28 overflow-x-auto max-md:pb-14 w-full sm:px-14">
          <div className="w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
