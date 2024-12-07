import styled from "@emotion/styled";

export const AuctionTimerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.blue_main};
  color: ${({ theme }) => theme.colors.white};
`;
