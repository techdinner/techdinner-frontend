import { FC } from "react";
import { ISidebarItem } from "../../../infra/types/SidebarItem";
import { MenuItem, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSidebarItem } from "../sidebar/Item";

interface SubMenuItemProps {
  item: ISidebarItem;
}

const SubMenuItem: FC<SubMenuItemProps> = ({ item }) => {
  const router = useRouter();
  const { closeSubMenu } = useSidebarItem();

  return (
    <Link
      key={item.route}
      href={router.asPath !== item.route ? item.route ?? "#" : "#"}
      passHref
    >
      <MenuItem onClick={closeSubMenu}>
        {router.asPath !== item.route ? (
          <MuiLink underline={"hover"}>{item.name}</MuiLink>
        ) : (
          <Typography color="primary">{item.name}</Typography>
        )}
      </MenuItem>
    </Link>
  );
};
export default SubMenuItem;
