import { useState } from "react";

/**
 * 입찰 로직
 */
export const useBid = () => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  const handleBid = () => {
    // 입찰 버튼 클릭
    console.log(price);
  };
  const handleOpenBottomSheet = () => {
    setOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setOpen(false);
  };

  return {
    open,
    price,
    setPrice,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleBid,
  };
};
