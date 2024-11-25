import styled from "@emotion/styled";
import type { NavBarItemType } from ".";

export const NavBarItemWrapper: ReturnType<
  typeof styled.div<{ type: NavBarItemType }>
> = styled.div<{ type: NavBarItemType }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  color: ${({ type }) => (type === "active" ? "#000000" : "#aaaaaa")};
  cursor: pointer;
`;
