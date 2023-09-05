import React, { ReactNode, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { LayoutContext } from "./LayoutContext";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden">
      <LayoutContext.Provider value={{ open, setOpen }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 m-[-0.5rem] h-screen overflow-auto">
            {children}
          </main>
          <div className="w-1 lg:w-10 h-screen bg-[#1e1f24]"></div>
        </div>
      </LayoutContext.Provider>
    </div>
  );
};

export default Layout;
