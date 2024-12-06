import styled from "@emotion/styled";
import type { TabItemState } from ".";
import { ThemeType } from "styles/theme";

export const TabItemWrapper: ReturnType<
  typeof styled.div<{ state: TabItemState }>
> = styled.div<{ state: TabItemState }>`
  display: flex;
  flex-direction: column;
  color: ${({ state, theme }: { state: TabItemState; theme: ThemeType }) =>
    state === "active"
      ? theme.colors.blue_text
      : theme.colors.grey_field_guide_but_deactivate};
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  p {
    //14px = 0.875rem, tabindicator가 2px이라 16-2=14px
    padding: 1rem 0.5rem 0.875rem 0.5rem;
  }
`;
