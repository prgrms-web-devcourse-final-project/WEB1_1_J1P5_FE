import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ITextButtonProps } from ".";
import { ThemeType } from "styles/theme";

export const TextButtonWrapper: ReturnType<
  typeof styled.button<ITextButtonProps>
> = styled.button<ITextButtonProps>`
  // 버튼 스타일 초기화
  outline: none;
  border: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({
    backgroundColor = "default",
    theme,
  }: {
    backgroundColor?: string;
    theme: ThemeType;
  }) =>
    backgroundColor === "transparent"
      ? "transparent"
      : backgroundColor === "red"
        ? theme.colors.red
        : backgroundColor === "grey"
          ? theme.colors.grey_field_deactivate
          : theme.colors.blue_main};

  color: ${({
    backgroundColor = "default",
    theme,
  }: {
    backgroundColor?: string;
    theme: ThemeType;
  }) =>
    backgroundColor === "grey"
      ? theme.colors.grey_text_guide
      : theme.colors.white};

  border-radius: 10px;
  padding: 0;

  font-size: 1rem;

  &:disabled {
    background-color: ${({ theme }: {theme: ThemeType}) => theme.colors.grey_field_deactivate};
    color: ${({ theme }: {theme: ThemeType}) => theme.colors.grey_text_guide};
  }

  /**
   * TODO : s 디자인 적용 필요
   */
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
      height: 3.375rem;
      margin-left: 1rem;
      margin-right: 1rem;
    `}
  /**
   * TODO : l 디자인 적용 필요
   */
  ${({ size }) =>
    size === "l" &&
    css`
      height: 2.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    `}
`;
