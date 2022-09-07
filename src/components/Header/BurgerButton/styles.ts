import styled from "styled-components";
import colors from "../../../../styles/colors";
import media from "../../../../styles/media";

export const BurgerButtonStyle = styled.button`
  position: absolute;
  color: ${colors.text};
  font-size: 2rem;
  background-color: transparent;
  border: none;
  right: 0;
  top: 50%;
  margin-right: max(1%, 2rem);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media ${media.hover} {
    &:hover {
      color: ${colors.primary};
    }
  }
`;
