import { createContext, useState,ReactNode } from "react";

const initialValue = { isCollapsed: false , toggleSidebarcollapse: () =>{}};

const SidebarContext = createContext(initialValue);
interface Props {
  children : ReactNode | ReactNode[];
}
const SidebarProvider = ({ children } : Props) => {
  const [isCollapsed, setCollapse] = useState(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };