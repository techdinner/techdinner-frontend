import { FC, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

import icons from "@mui/icons-material";

export interface ISidebarItem {
  name: string;
  icon?: keyof typeof icons;
  route?: string | undefined;
  subItems?: ISidebarItem[];
}
