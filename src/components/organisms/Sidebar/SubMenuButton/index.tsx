import { FC, useEffect } from "react";
import Link from "next/link";
import { SubMenuButtonStyle } from "./styles";
import { ISidebarItem } from "../../../types/SidebarItem";
import ConditionalLink from "../../ConditionalLink";
import { useRouter } from "next/router";

interface SubMenuButtonProps {
  isTitle: boolean;
  item: ISidebarItem;
}

const SubMenuButton: FC<SubMenuButtonProps> = ({ isTitle, item }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname, router.route, item.route);
  }, []);
  return (
    <>
      <ConditionalLink
        href={item.route ?? ""}
        render={router.route !== item.route}
      >
        <SubMenuButtonStyle isTitle={isTitle}>
          {isTitle ? <b>{item.name}</b> : <span>{item.name}</span>}
        </SubMenuButtonStyle>
      </ConditionalLink>
    </>
  );
};
export default SubMenuButton;
