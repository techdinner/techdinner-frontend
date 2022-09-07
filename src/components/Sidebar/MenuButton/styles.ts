import styled from "styled-components";
import colors from "../../../../styles/colors";

export const MenuButtonStyle = styled.button.attrs((item: any) => item)`
  height: 70px;
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  user-select: none;
  cursor: pointer;
  border: 4px solid ${colors.menu};
  border-radius: 5px;
  background-color: ${colors.back};
  color: ${colors.text};
  pointer-events: fill;
  box-sizing: border-box;
`;
