import { FC, ReactElement } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { LayoutStyle } from "./styles";

interface LayoutProps {
    children? : ReactElement[]
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <LayoutStyle>
        <Sidebar />
        <div className="center">
          <Header />
          {children}
        </div>
    </LayoutStyle>
  )
}

export default Layout