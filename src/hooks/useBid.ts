import { useState } from "react";
import { bidding, cancelBidding, editBidding } from "services/apis";
import { useFetchProduct } from "hooks";
import { useModalStore } from "stores";
import { Toast } from "components/atoms";

/**
 * 입찰 로직
 */
export const useBid = (productId: number) => {
  const {
    actions: { closeModal },
  } = useModalStore();
  const { productRefetch } = useFetchProduct(productId.toString());
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  const handleOpenBottomSheet = () => {
    setOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setOpen(false);
  };

  /**
   * 입찰 버튼 클릭
   */
  const handleBid = (
    minimumPrice: number,
    myAuctionId?: number,
    isEarly?: boolean,
  ) => {
    // TODO 조기종료 시 처리 필요
    console.log(isEarly);
    // 1. 가격 체크
    const priceValue = Number(price.replace(/,/g, ""));
    if (priceValue < minimumPrice) {
      Toast.show(
        `${minimumPrice.toLocaleString()}원 이상으로 입력해주세요.`,
        2000,
      );
      return;
    }
    // 2. 백엔드 요청
    if (!myAuctionId) {
      // 현재 입찰중이 아닌 경우
      // TODO 동네 인증 여부
      // TODO 입찰 전 경고 모달
      bidding({ productId, price: priceValue })
        .then((data) => {
          // 입찰 완료
          console.log(data);
          // TODO Refetch 수정
          productRefetch().catch(console.error);
          handleCloseBottomSheet();
          Toast.show("입찰을 성공했습니다.", 2000);
        })
        .catch(console.error);
    } else {
      // 현재 입찰중인 경우
      editBidding({
        productId,
        price: priceValue,
        auctionId: myAuctionId,
      })
        .then((data) => {
          console.log(data);
          // TODO Refetch 수정
          productRefetch().catch(console.error);
          handleCloseBottomSheet();
          Toast.show("입찰 가격이 수정되었습니다.", 2000);
        })
        .catch(console.error);
    }
  };

  /**
   * 입찰 취소
   */
  const handleCancel = (myAuctionId: number, isEarly: boolean) => {
    // TODO 조기마감 적용된 상태라면 처리
    console.log(isEarly);
    if (myAuctionId) {
      cancelBidding(myAuctionId)
        .then((data) => {
          console.log(data);
          // TODO Refetch 수정
          productRefetch().catch(console.error);
          closeModal();
          Toast.show("입찰이 취소되었습니다.", 2000);
        })
        .catch(console.error);
    }
  };

  return {
    open,
    price,
    setPrice,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleBid,
    handleCancel,
  };
};
