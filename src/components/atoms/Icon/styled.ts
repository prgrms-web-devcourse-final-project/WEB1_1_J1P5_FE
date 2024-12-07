import styled from "@emotion/styled";

export interface IIconProps {
  /** 아이콘의 사이즈 */
  size?: "s" | "m" | "l";
  color?: string;
}

export const IconSizes = {
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
} as const;

/**
 * 아이콘 공통 스타일
 */
export const IconWrapper: ReturnType<
  typeof styled.i<IIconProps>
> = styled.i<IIconProps>`
  line-height: 0;
  font-size: ${(props) => IconSizes[props.size!]};
`;
