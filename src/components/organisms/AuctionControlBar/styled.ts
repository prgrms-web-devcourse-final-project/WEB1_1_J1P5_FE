import styled from "@emotion/styled";

export const AuctionControlBarRootWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ececec;
`;

export const ButtonContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
`;

export const BidWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BidContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
`;

