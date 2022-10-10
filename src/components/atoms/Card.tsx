import type { FC, ReactNode, ReactElement } from "react";

interface CardProps {
  Implementation: ReactElement;
  onclick?: Function;
}

const Card: FC<CardProps> = ({ Implementation, onclick }) => {
  return (
    <>
      <Implementation onclick={onclick} />
    </>
  );
};
export default Card;
