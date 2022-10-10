import { ISidebarItem } from "../types/SidebarItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import Icon from "../../../trash/components/atoms/Icon";

const sidebarItems: ISidebarItem[] = [
  {
    icon: Icon({ ReactIcon: AiFillHome }),
    name: "Home",
    route: "/home",
  },
  {
    icon: Icon({ ReactIcon: BsFillPencilFill }),
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
];

export default sidebarItems;
