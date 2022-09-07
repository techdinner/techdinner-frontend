import styled from "styled-components";
import sizes from "../../../infra/sizes";

export const SubMenuStyle = styled.ul<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: ${sizes.sidebar};
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);
  cursor: default;
  overflow: hidden;
  height: ${(props) => (props.show ? "auto" : "0")};
  transition: height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 50vh;
  padding: ${(props) => (props.show ? "10px 30px" : "0")};
  border-radius: 3px;
`;
