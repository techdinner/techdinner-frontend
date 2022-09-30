import type { FC } from "react";
import { IconType } from "react-icons";

interface iconProps {
  ReactIcon: IconType;
}

const Icon: FC<iconProps> = ({ ReactIcon }) => {
  return <ReactIcon />;
};
export default Icon;
