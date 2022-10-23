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
import { IOrder } from "../../infra/types/order";

interface IHomeContext {
  currentOrder: IOrder | null;
  setCurrentOrder: Dispatch<SetStateAction<IOrder | null>>;
}

interface IHomeProvider {
  children: ReactNode;
}

const HomeContext = createContext<IHomeContext>({} as IHomeContext);

export const HomeProvider: FC<IHomeProvider> = ({ children }) => {
  const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null);

  return (
    <HomeContext.Provider value={{ currentOrder, setCurrentOrder }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => {
  return useContext(HomeContext);
};
