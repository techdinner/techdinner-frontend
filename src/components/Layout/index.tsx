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
        <Header />
        <Sidebar />
        {children}
    </LayoutStyle>
  )
}

export default Layout