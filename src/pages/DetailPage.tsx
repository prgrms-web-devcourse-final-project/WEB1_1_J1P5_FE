import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailTemplate } from "components/templates";
import { KebabIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { useFetchProduct } from "hooks";
import type { IComment } from "types";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading } = useFetchProduct(productId!);
  const { setTitle, setRightIcon } = useTopBarStore();
  //
  const [comments] = useState<IComment[]>([]);

  /**
   * 거래 희망 장소 클릭
   */
  const handleLocationMapClick = () => {
    // 거래희망장소 페이지 이동
    navigate("/transaction-location");
  };

  /**
   * 댓글 작성
   * @param message 댓글 내용
   */
  const handleWriteComment = (message: string) => {
    // TODO 댓글 작성
    console.log(message);
  };

  /**
   * 입찰 취소
   */
  const handleCancelBid = () => {};

  /**
   * 조기마감
   */
  const handleEarlyClosing = () => {};

  useEffect(() => {
    setRightIcon(KebabIcon, () => {
      console.log("케밥 클릭");
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTitle(product.title);
    }
  }, [isLoading]);

  if (isLoading || !product) {
    // TODO 스켈레톤 UI
    return null;
  }

  return (
    <>
      <DetailTemplate
        seller={product.seller}
        images={product.images}
        title={product.title}
        category={product.category}
        expiredTime={product.expiredTime}
        uploadTime={product.uploadTime}
        content={product.content}
        productLocation={product.productLocation}
        onLocationClick={handleLocationMapClick}
        comments={comments}
        onWriteComment={handleWriteComment}
        minimumPrice={product.minimumPrice}
        myPrice={product.myPrice}
        maximumPrice={product.maximumPrice}
        isEarly={product.isEarly}
        productId={product.productId}
        hasBuyer={product.hasBuyer}
        onCancel={handleCancelBid}
        onEarlyClosing={handleEarlyClosing}
      />
    </>
  );
};
