import type { FC } from "react";
import { Button } from "@mui/material";

interface CommonButtonProps {
  variant: "contained" | "outlined" | "text" | undefined;
}

const CommonButton: FC<CommonButtonProps> = (props) => {
  return <Button {...props}></Button>;
};
export default CommonButton;
