import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import {
  DescRegularWrapper,
  WritingBoldWrapper,
} from "components/atoms/Text/styled";

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
    margin: 0;
    flex: 1;
    &:disabled {
      cursor: default;
      background-color: ${({ theme }) =>
        theme.colors.grey_field_guide_but_deactivate};
      color: ${({ theme }) => theme.colors.blue_text};
    }
  }
`;

export const BidWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${DescRegularWrapper} {
    color: ${({ theme }) => theme.colors.grey_text_guide};
  }
  ${WritingBoldWrapper} {
    color: ${({ theme }) => theme.colors.grey_text_main};
  }
`;

export const BidContainerWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
`;
