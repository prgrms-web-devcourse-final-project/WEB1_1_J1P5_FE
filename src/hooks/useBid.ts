import { useEffect, useMemo, useState } from "react";
import { bidding, cancelBidding, editBidding } from "services/apis";
import { useFetchBidding } from "hooks";

/**
 * 입찰 로직
 */
export const useBid = (productId: number) => {
  const { biddingList, isLoading } = useFetchBidding();
  const myPrice = useMemo(() => {
    return (
      (!isLoading && biddingList.find((b) => b.productId === productId)) || null
    );
  }, [isLoading]);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  /**
   * 입찰 버튼 클릭
   */
  const handleBid = () => {
    if (!myPrice) {
      // 현재 입찰중이 아닌 경우
      bidding({ productId, price: Number(price.replace(/,/g, "")) })
        .then((data) => {
          console.log(data);
        })
        .catch(console.error);
    } else {
      // 현재 입찰중인 경우
      editBidding({
        productId,
        price: Number(price.replace(/,/g, "")),
        auctionId: myPrice.auctionId,
      })
        .then((data) => {
          console.log(data);
        })
        .catch(console.error);
    }
  };

  /**
   * 입찰 취소
   */
  const handleCancel = () => {
    if (myPrice) {
      cancelBidding(myPrice.auctionId)
        .then((data) => {
          console.log(data);
        })
        .catch(console.error);
    }
  };

  const handleOpenBottomSheet = () => {
    setOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(myPrice);
  }, []);

  return {
    open,
    price,
    myPrice,
    setPrice,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleBid,
    handleCancel,
  };
};
