import React from "react";
import { css } from "styled-components";
import { style } from "./ButtonStyles";

const { PrevArrow, NextArrow, StyledButton } = style;

const ICON = {
  prev: PrevArrow,
  next: NextArrow,
};

const VARIANT = {
  previous: css`
    margin: 0.5rem 0 0.5rem 0.5rem;
  `,

  next: css`
    margin: 0.5rem;
  `,

  thisMonth: css`
    width: 70px;
    margin: 0.5rem;
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

export default Button;
