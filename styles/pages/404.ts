import styled from "styled-components";
import colors from "../colors";
import media from "../media";

export const FourZeroFourStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  svg {
    font-size: 15rem;
    fill: ${colors.info};
  }

  a {
    text-decoration: underline;

    @media ${media.hover} {
      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;
