import type { FC, ReactNode } from "react";
import { HeaderTitleStyle } from "../../Header/HeaderTitle/styles";
import { Typography } from "@mui/material";

interface TextProps {
  children: ReactNode;
}

const HeaderTitle: FC<TextProps> = ({ ...props, children }) => {
  return <Typography>{children}</Typography>;
};
export default HeaderTitle;
