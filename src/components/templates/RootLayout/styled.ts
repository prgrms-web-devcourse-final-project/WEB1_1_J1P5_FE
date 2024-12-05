import styled from "@emotion/styled";
import { HeaderWrapper } from "components/organisms/Header/styled";
import { TopBarWrapper } from "components/organisms/TopBar/styled";
import { BottomNavBarWrapper } from "components/organisms/BottomNavBar/styled";

export const PageLayoutWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
`;

export const RootLayoutWrapper: ReturnType<typeof styled.div> = styled.div`
  min-height: 100vh;
  max-width: 375px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${HeaderWrapper}, ${TopBarWrapper} {
    position: sticky;
    top: 0;
    z-index: 9999;
  }
  ${BottomNavBarWrapper} {
    position: sticky;
    bottom: 0;
  }
`;
