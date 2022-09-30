import styled from "styled-components";
import colors from "../../../../styles/colors";
import { device } from "../../../infra/breakpoints";

export const FloatButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.back};
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0px 30px 20px 0px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  font-size: 30px;

  @media ${device.laptop} {
    display: none;
  }
`;
