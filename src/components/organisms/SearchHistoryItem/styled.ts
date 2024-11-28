import styled from "@emotion/styled";
import { IconWithTextWrapper } from "components/molecules/IconWithText/styled";

export const SearchHistoryItemWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${IconWithTextWrapper} {
    ${IconWithTextWrapper} {
      flex: 1;
    }
  }
`;
