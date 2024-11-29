import React from "react";
import { Text, TextButton } from "components/atoms";
import { LabeledInput } from "components/molecules";
import type { IModalBottomSheetProps } from "components/molecules/ModalBottomSheet";

import { AuctionBidBottomSheetWrapper } from "./styled";

interface IAuctionBidBottomSheetProps extends IModalBottomSheetProps {
  /** 입력할 입찰가 */
  price: string;
  /** 입찰가 설정 함수 */
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  /** 이전 입찰가 */
  beforePrice?: number;
  /** 최소 입찰가 */
  minPrice: number;
  /** 입찰하기 버튼 클릭 시 실행될 함수 */
  onBid: () => void;
}

export const AuctionBidBottomSheet = ({
  open,
  onClose,
  price,
  setPrice,
  beforePrice,
  minPrice,
  onBid
}: IAuctionBidBottomSheetProps) => {
  const placeholder = beforePrice
    ? `내 입찰가 ${beforePrice.toLocaleString()}`
    : `최소 ${minPrice.toLocaleString()}`;

  return (
    <AuctionBidBottomSheetWrapper open={open} onClose={onClose}>
      <LabeledInput
        id={"AuctionBid"}
        label="희망 입찰가"
        placeholder={placeholder}
        value={price}
        setValue={setPrice}
      />
      <Text content={`최소 입찰가 ${minPrice.toLocaleString()}`} />
      <TextButton text="입찰하기" onClick={onBid} />
    </AuctionBidBottomSheetWrapper>
  );
};

