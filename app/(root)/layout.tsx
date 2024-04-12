import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full">
      {children}
    </main>
  );
};

export default layout;
