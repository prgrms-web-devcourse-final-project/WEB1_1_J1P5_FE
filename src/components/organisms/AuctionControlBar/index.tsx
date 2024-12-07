import { Text, TextButton } from "components/atoms";
import {
  AuctionControlBarRootWrapper,
  BidWrapper,
  BidContainerWrapper,
  ButtonContainerWrapper,
} from "./styled";

/* -------------------------------------------------------------------
 * AuctionControlBar Root
 * ------------------------------------------------------------------- */

interface IAuctionControlBarRootProps {
  children: React.ReactNode;
}

const AuctionControlBarRoot = ({ children }: IAuctionControlBarRootProps) => {
  return (
    <AuctionControlBarRootWrapper>{children}</AuctionControlBarRootWrapper>
  );
};

/* -------------------------------------------------------------------
 * Bid
 * TODO 형식 변경되면서 BidContainer의 자식으로 사용 처리 필요
 * ------------------------------------------------------------------- */

export interface IBidProps {
  title: string;
  price: number;
}

const Bid = ({ title, price }: IBidProps) => {
  return (
    <BidWrapper>
      <Text variant="desc_regular" content={title} />
      <Text variant="writing_bold" content={`${price.toLocaleString()}원`} />
    </BidWrapper>
  );
};

/* -------------------------------------------------------------------
 * BidContainer
 * TODO 형식 변경되면서 context로 처리 필요
 * ------------------------------------------------------------------- */

export interface IBidsProps {
  children: React.ReactNode;
}

const BidContainer = ({ children }: IBidsProps) => {
  return <BidContainerWrapper>{children}</BidContainerWrapper>;
};

/* -------------------------------------------------------------------
 * ButtonContainer
 * ------------------------------------------------------------------- */

export interface IAuctionControlBarButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer = ({
  children,
}: IAuctionControlBarButtonContainerProps) => {
  return <ButtonContainerWrapper>{children}</ButtonContainerWrapper>;
};

/* -------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------- */

export const AuctionControlBar: typeof AuctionControlBarRoot & {
  BidContainer: typeof BidContainer;
  Bid: typeof Bid;
  ButtonContainer: typeof ButtonContainer;
  Button: typeof TextButton;
} = Object.assign(AuctionControlBarRoot, {
  BidContainer: BidContainer,
  Bid: Bid,
  ButtonContainer: ButtonContainer,
  Button: TextButton,
});
