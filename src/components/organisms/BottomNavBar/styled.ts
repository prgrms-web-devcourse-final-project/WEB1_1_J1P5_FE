import styled from "@emotion/styled";
import { NavBarItemWrapper } from "components/molecules/NavBarItem/styled";

export const BottomNavBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0.25rem 0;
  ${NavBarItemWrapper} {
    flex: 1;
  }
`;
