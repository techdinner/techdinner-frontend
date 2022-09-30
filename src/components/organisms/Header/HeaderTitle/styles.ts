import styled from "styled-components";
import colors from "../../../../styles/colors";

export const HeaderTitleStyle = styled.h3`
  position: absolute;
  color: ${colors.text};
  font-size: clamp(1rem, 50vw, 1.2rem);
  margin-left: 1rem;
  display: inline-block;
`;
