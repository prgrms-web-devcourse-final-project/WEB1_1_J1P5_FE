import styled from "@emotion/styled";
import { BottomNavBarWrapper } from "components/organisms/BottomNavBar/styled";

export const MarketPriceTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .post-con {
    flex: 1;
    overflow-y: auto;
  }

  ${BottomNavBarWrapper} {
    position: sticky;
  }
`;
