import { FC, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

export interface ISidebarItem {
  name: string;
  icon?: ReactElement<any, any> | null; //JSX.Element;
  route?: string | undefined;
  subItems?: ISidebarItem[];
}
