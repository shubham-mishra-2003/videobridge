import StreamProvider from "@/providers/StreamProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "VideoBridge | connect",
  description: "Video meeting/calling App made by connect",
  icons: "../videobridge_logo.png"
};


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full w-vw overflow-hidden">
      <StreamProvider>
        {children}
      </StreamProvider>
    </main>
  );
};

export default layout;
