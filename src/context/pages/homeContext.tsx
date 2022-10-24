import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

// import { parseCookies, setCookie } from "nookies";
import { IOrder } from "../../infra/types/entities/order";

interface IHomeContext {
  currentOrder: IOrder | null;
  setCurrentOrder: Dispatch<SetStateAction<IOrder | null>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

interface IHomeProvider {
  children: ReactNode;
}

const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider: FC<IHomeProvider> = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null);
  const [filter, setFilter] = useState<string>("all");

  return (
    <HomeContext.Provider
      value={{ currentOrder, setCurrentOrder, filter, setFilter }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => {
  return useContext(HomeContext);
};
