import { createContext, FC, ReactNode, useContext } from "react";
import { INotify } from "../infra/types/notify";

interface INotifyContext {
  notifications: INotify[];
}

interface INotifyProvider {
  children: ReactNode;
}

const NotifyContext = createContext<INotifyContext>({} as INotifyContext);

export const NotifyProvider: FC<INotifyProvider> = ({ children }) => {
  const notifications: INotify[] = [
    {
      id: "6565dsaf5a6f59asc59asca92",
      title: "Pedido não impresso!",
      description:
        "Impressão obrigatória para cozinha ativada. Desative nas configurações para que esta notificação não apareça.",
      type: "warning",
      route: "/orders&id=6565dsaf5a6f59asc59",
      date: new Date("2022-10-21 16:30:00"),
    },
    {
      id: "0sa6dsaf5a6f59aoas558asaA",
      title: "Pedido atrasado!",
      description:
        "O pedido de Maria Luiza excedeu o tempo de 2h, verifique o andamento do pedido.",
      type: "warning",
      route: "/orders&id=6565dsaf5a6f59asc59",
      date: new Date("2022-10-21 16:30:00"),
    },
  ];

  return (
    <NotifyContext.Provider value={{ notifications }}>
      {children}
    </NotifyContext.Provider>
  );
};

export const useNotify = () => {
  return useContext(NotifyContext);
};
