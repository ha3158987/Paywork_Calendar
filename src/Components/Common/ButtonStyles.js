import { ReactComponent as PrevArrow } from "Assets/leftArrow.svg";
import { ReactComponent as NextArrow } from "Assets/rightArrow.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  ${(props) => props.varientStyle}

  padding: 0.3rem 0.5rem;
  cursor: pointer;
  background-color: "#f9f9f9";
  border: none;
  border-radius: 5px;

  :hover {
    background-color: #d0d0d0;
    transition: background-color 0.2s;
  }
`;

export const style = {
  PrevArrow,
  NextArrow,
  StyledButton,
};
