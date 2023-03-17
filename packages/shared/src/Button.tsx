import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const StyledButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 5px;
`;

const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
