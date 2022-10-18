import { FC } from "react";
import { List } from "@mui/material";
import sidebarItems from "../../../infra/data/sidebarItems";
import Item from "../../atoms/sidebar/Item";

const Menu: FC = () => {
  return (
    <List
      disablePadding
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
        width: 1,
      }}
    >
      {sidebarItems.map((item) => (
        <Item key={item.name} item={item} />
      ))}
    </List>
  );
};
export default Menu;
