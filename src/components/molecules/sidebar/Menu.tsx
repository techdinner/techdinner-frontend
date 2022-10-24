import { FC } from "react";
import List from "@mui/material/List";
import Item from "../../atoms/sidebar/Item";
import { ISidebarItem } from "../../../infra/types/SidebarItem";

const Menu: FC<{ items: ISidebarItem[] }> = ({ items }) => {
  return (
    <List
      disablePadding
      sx={{
        flexShrink: 1,
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
        width: 1,
        // height: 0.57,
      }}
    >
      {items.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </List>
  );
};
export default Menu;
