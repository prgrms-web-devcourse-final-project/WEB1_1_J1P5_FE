import styled from "@emotion/styled";
import { TabMenuWrapper } from "components/molecules/TabMenu/styled";

export const TransactionOverviewWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${TabMenuWrapper} {
    width: max-content;
    margin: 0 1rem;
  }
`;
