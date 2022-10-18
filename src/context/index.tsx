import SidebarProvider from "./organisms/sidebarContext";
import { FC, ReactNode } from "react";
import { MuiProvider } from "../context/muiContext";
import { UserProvider } from "./userContext";

interface IContexts {
  children: ReactNode;
}

export const Contexts: FC<IContexts> = ({ children }) => {
  return (
    <UserProvider>
      <MuiProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </MuiProvider>
    </UserProvider>
  );
};
