import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ISidebarProvider {
  children: ReactNode;
}

interface ISidebarContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  width: number;
}

const SidebarContext = createContext<ISidebarContext>({} as ISidebarContext);

const SidebarProvider: FC<ISidebarProvider> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const width = 60;

  return (
    <SidebarContext.Provider value={{ open, setOpen, width }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export const useSidebar = () => {
  return useContext(SidebarContext);
};
