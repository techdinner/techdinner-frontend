import type { FC } from "react";
import Image from "next/image";

const TopContainer: FC = ({}) => {
  return (
    <Image src="/favicon.ico" alt={"TechDinner Logo"} width="50" height="50" />
  );
};
export default TopContainer;
