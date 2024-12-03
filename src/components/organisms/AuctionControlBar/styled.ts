import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const AuctionControlBarRootWrapper: ReturnType<typeof styled.div> =
  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    filter: drop-shadow(0 0 10px rgba(19, 27, 83, 0.05));
    padding: 1rem;
    border-radius: 0.5rem;
  `;

export const ButtonContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
  ${TextButtonWrapper} {
    flex: 1;
  }
`;

export const BidWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const BidContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
`;
