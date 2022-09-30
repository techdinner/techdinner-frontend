import type { FC, ReactElement } from "react";
import Link from "next/link";

interface ConditionalLinkProps {
  href: string;
  render: boolean;
  children: ReactElement;
}

const ConditionalLink: FC<ConditionalLinkProps> = ({
  href,
  render,
  children,
}) => {
  if (render)
    return (
      <Link href={href} passHref>
        {children}
      </Link>
    );
  return <>{children}</>;
};
export default ConditionalLink;
