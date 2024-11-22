import styled from "@emotion/styled";

export interface IIconProps {
  /** 아이콘의 사이즈 */
  size?: "s" | "m" | "l";
}

export const IconSizes = {
  s: "1rem",
  m: "2rem",
  l: "3rem",
} as const;

/**
 * 아이콘 공통 스타일
 */
export const IconWrapper: ReturnType<typeof styled.i<IIconProps>> =
  styled.i<IIconProps>`
    font-size: ${(props) => IconSizes[props.size!]};
  `;
