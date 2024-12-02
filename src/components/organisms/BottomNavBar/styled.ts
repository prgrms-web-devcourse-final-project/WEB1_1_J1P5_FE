import styled from "@emotion/styled";
import { NavBarItemWrapper } from "components/molecules/NavBarItem/styled";

export const BottomNavBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  ${NavBarItemWrapper} {
    flex: 1;
  }
`;
