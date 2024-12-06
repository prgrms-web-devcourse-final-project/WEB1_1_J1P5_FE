import styled from "@emotion/styled";
import type { ITabIndicatorProps } from "./index";
import { ThemeType } from "styles/theme";

export const TabIndicatorWrapper: ReturnType<
  typeof styled.div<ITabIndicatorProps>
> = styled.div<ITabIndicatorProps>`
  width: 100%;
  height: 2px;
  background-color: ${({
    isActive,
    theme,
  }: {
    isActive?: boolean;
    theme: ThemeType;
  }) =>
    isActive
      ? theme.colors.blue_text
      : theme.colors.grey_field_guide_but_deactivate};
`;
