import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { HeaderLayout } from "./HeaderLayout";
import { FootterLayout } from "./FootterLayout";

interface Props {
  children: ReactNode | ReactNode[];
}
const BaseLayout = ({ children }: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">
        <HeaderLayout onSidebarOpen={() => setSidebarOpen(true)} />

        {children}

        <FootterLayout />
      </main>
    </div>
  );
};

export default BaseLayout;
