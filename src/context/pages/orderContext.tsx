import { createContext, FC } from "react";
import Order from "../../components/organisms/home/Order";
import { useHome } from "./homeContext";

interface IOrderContext {
  close: () => void;
}

const OrderContext = createContext<IOrderContext>({} as IOrderContext);

const OrderProvider: FC = () => {
  const { currentOrder, setCurrentOrder } = useHome();

  function close() {
    setCurrentOrder(null);
  }

  return (
    <OrderContext.Provider value={{ close }}>
      <Order />
    </OrderContext.Provider>
  );
};
export default OrderProvider;
