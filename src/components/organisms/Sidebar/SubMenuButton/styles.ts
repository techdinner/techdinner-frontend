import styled, { css } from "styled-components";
import colors from "../../../../styles/colors";

export const SubMenuButtonStyle = styled.a<{ isTitle: boolean }>`
  ${(props) =>
    !props.isTitle &&
    css`
      font-size: 1.3rem;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: ${colors.primary};
        }
      }
    `}

  ${(props) =>
    props.isTitle &&
    css`
      cursor: default;
      font-size: 1.7rem;
    `}
`;
