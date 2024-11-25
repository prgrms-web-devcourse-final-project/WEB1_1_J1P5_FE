import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ITextButtonProps } from ".";

export const TextButtonWrapper: ReturnType<
  typeof styled.div<ITextButtonProps>
> = styled.div<ITextButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ backgroundColor }) =>
    backgroundColor === "transparent" ? "transparent" : "#D9D9D9"};

  border-radius: 4px;
  padding-top: 0;
  padding-bottom: 0;

  font-size: 1rem;

  ${({ size }) =>
    size === "s" &&
    css`
      height: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    `}

  ${({ size }) =>
    size === "m" &&
    css`
      height: 2rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `}

  ${({ size }) =>
    size === "l" &&
    css`
      height: 2.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    `}
`;
