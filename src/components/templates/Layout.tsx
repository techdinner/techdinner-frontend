import { FC, ReactElement } from "react";
import { useComponents } from "../../context/componentsContext";
import Header from "../organisms/Header";
import Sidebar from "../organisms/Sidebar";

interface LayoutProps {
  children?: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const Components = useComponents();
  return (
    <div>
      <Components.sidebar />
      <div className="center">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
