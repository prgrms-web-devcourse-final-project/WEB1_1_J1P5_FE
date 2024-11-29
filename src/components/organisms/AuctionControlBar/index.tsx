import { Text, TextButton } from "components/atoms";
import {
  AuctionControlBarRootWrapper,
  BidWrapper,
  BidContainerWrapper,
  ButtonContainerWrapper
} from "./styled";

import type { IButton } from "types";

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
 * ------------------------------------------------------------------- */

export interface IBidProps {
  title: string;
  price: number;
}

const Bid = ({ title, price }: IBidProps) => {
  return (
    <BidWrapper>
      <Text content={title} variant="body1" />
      <Text content={`${price.toLocaleString()}원`} variant="body1" />
    </BidWrapper>
  );
};

/* -------------------------------------------------------------------
 * BidContainer
 * ------------------------------------------------------------------- */

export interface IBidsProps {
  bids: IBidProps[];
}

const BidContainer = ({ bids }: IBidsProps) => {
  return (
    <BidContainerWrapper>
      {bids.map(({ title, price }, idx) => (
        <Bid key={`bid_${title}_${idx}`} title={title} price={price} />
      ))}
    </BidContainerWrapper>
  );
};

/* -------------------------------------------------------------------
 * ButtonContainer
 * ------------------------------------------------------------------- */

export interface IAuctionControlBarButtonContainerProps {
  buttons: IButton[];
}

const ButtonContainer = ({
  buttons
}: IAuctionControlBarButtonContainerProps) => {
  return (
    <ButtonContainerWrapper>
      {buttons.map(({ title, background, onClick }, idx) => (
        <TextButton
          key={`auctionControlBar_buttons_${title}_${idx}`}
          text={title}
          backgroundColor={background}
          onClick={onClick}
        />
      ))}
    </ButtonContainerWrapper>
  );
};

/* -------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------- */

export const AuctionControlBar: typeof AuctionControlBarRoot & {
  BidContainer: typeof BidContainer;
  ButtonContainer: typeof ButtonContainer;
} = Object.assign(AuctionControlBarRoot, {
  BidContainer: BidContainer,
  ButtonContainer: ButtonContainer
});

