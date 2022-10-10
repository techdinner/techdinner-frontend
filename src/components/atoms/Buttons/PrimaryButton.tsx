import type { FC } from "react";
import { Button as MUIButton } from "@mui/material";
import { IButton } from "../../../../trash/components/types/components/IButton";

const Button: FC<IButton> = (props) => {
  return <MUIButton color="primary" sx={{ display: "flex" }} {...props} />;
};
export default Button;
