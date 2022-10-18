import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import type { FC } from "react";
import { IconType } from "react-icons";

interface iconProps {
  ReactIcon?: IconType;
  MuiIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
const IconWrapper: FC<iconProps> = ({ ReactIcon, MuiIcon }) => {
  return ReactIcon ? <ReactIcon /> : MuiIcon ? <MuiIcon /> : <></>;
};
export default IconWrapper;
