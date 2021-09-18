import React from "react";
import { ReactComponent as PrevArrow } from "Assets/leftArrow.svg";
import { ReactComponent as NextArrow } from "Assets/rightArrow.svg";
import styled, { css } from "styled-components";

const ICON = {
  prev: PrevArrow,
  next: NextArrow,
};

const VARIANT = {
  previous: css`
    border: 1px solid red;
  `,

  next: css`
    border: 1px solid yellow;
  `,

  thisMonth: css`
    font-size: 0.8rem;
  `,
};

const Button = ({ icon, name, handleClickFunc, children }) => {
  const varientStyle = VARIANT[name];
  const contentsSelector = (icon) => {
    if (icon) return React.createElement(ICON[icon]);
    else return children;
  };

  return (
    <StyledButton varientStyle={varientStyle} onClick={handleClickFunc}>
      {contentsSelector(icon)}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) => props.varientStyle}

  padding: 0.3rem 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  background-color: "#f9f9f9";
  border: none;
  border-radius: 5px;

  :hover {
    background-color: #d0d0d0;
    transition: background-color 0.2s;
  }
`;

export default Button;
