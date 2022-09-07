import type { FC } from "react";
import Image from "next/image";
import { IconContainerStyle } from "./styles";

interface IconContainerProps {}

const IconContainer: FC<IconContainerProps> = ({}) => {
  return (
    <IconContainerStyle>
      <Image
        src="/favicon.ico"
        alt={"TechDinner Logo"}
        width="50"
        height="50"
      />
    </IconContainerStyle>
  );
};
export default IconContainer;
