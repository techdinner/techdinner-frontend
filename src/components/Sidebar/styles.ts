import styled from "styled-components";
import colors from "../../../styles/colors";
import { device } from "../../infra/breakpoints";
import sizes from "../../infra/sizes";

export const SidebarStyle = styled.aside`
  display: none;

  @media ${device.tablet} {
    display: block;
    background-color: ${colors.menu};
    width: ${sizes.sidebar};
    flex-grow: 0;
    flex-shrink: 0;
  }
`;
