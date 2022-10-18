import { ISidebarItem } from "../types/SidebarItem";

const sidebarItems: ISidebarItem[] = [
  {
    icon: "Home",
    name: "Home",
    route: "/home",
  },
  {
    icon: "SaveAsRounded",
    name: "Cadastros",
    subItems: [
      {
        name: "Clientes",
        route: "/customers",
      },
      {
        name: "Produtos",
        route: "/products",
      },
      {
        name: "Usuários",
        route: "/users",
      },
      {
        name: "Entregadores",
        route: "/deliveries",
      },
    ],
  },
  {
    icon: "PieChart",
    name: "Relatórios",
    route: "/reports",
  },
  {
    icon: "Settings",
    name: "Configurações",
    route: "/settings",
  },
  {
    icon: "Help",
    name: "Ajuda",
    route: "/help",
  },
];

export default sidebarItems;
