import StreamProvider from "@/providers/StreamProvider";
import { ReactNode } from "react";

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
