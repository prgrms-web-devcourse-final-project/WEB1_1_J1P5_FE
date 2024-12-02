import styled from "@emotion/styled";
import { IconSizes, type IIconProps } from "../styled";

export const NoIconWrapper: ReturnType<typeof styled.span<IIconProps>> =
  styled.span<IIconProps>`
    display: inline-block;
    width: ${({ size }) => IconSizes[size!]};
    height: ${({ size }) => IconSizes[size!]};
  `;
