import styled from "@emotion/styled";
import type { ITabIndicatorProps } from "./index";

export const TabIndicatorWrapper: ReturnType<
  typeof styled.div<ITabIndicatorProps>
> = styled.div<ITabIndicatorProps>`
  width: 100%;
  height: 4px;
  background-color: ${({ isActive }) => (isActive ? "#000000" : "#8e8e8e")};
`;

