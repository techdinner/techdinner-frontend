import styled from "styled-components";
import sizes from "../../../infra/sizes";
// <{ show: boolean }>
export const SubMenuStyle = styled.ul`
  position: absolute;
  top: 0;
  left: calc(${sizes.sidebar} - 4px);
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
  cursor: default;
  overflow: hidden;
  opacity: 0;
  height: 0;
  padding: 0;
  /* height: $a{a(proaps) => (aprops.show ? "auto" : "0")}; */
  /* padding: $a{a(aprops) => (parops.show ? "10px 30px" : "0")}; */
  transition: size 0.5s ease-in, opacity 0.5s ease-in;
  &.show {
    height: auto;
    padding: 10px 30px;
    opacity: 100%;
  }
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 50vh;
  border-radius: 3px;
`;
