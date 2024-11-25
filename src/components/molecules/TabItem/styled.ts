import styled from "@emotion/styled";
import type { TabItemState } from ".";

export const TabItemWrapper: ReturnType<
  typeof styled.div<{ state: TabItemState }>
> = styled.div<{ state: TabItemState }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
  color: ${({ state }) => (state === "active" ? "#000000" : "#8e8e8e")};
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`;
