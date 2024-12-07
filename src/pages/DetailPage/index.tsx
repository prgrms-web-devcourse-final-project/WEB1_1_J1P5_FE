import { Suspense, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { DetailTemplate } from "components/templates";
import { KebabMenu } from "components/molecules";
import { KebabIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { useFetchProduct, useFetchComment, useKebabMenu } from "hooks";
import { KebabWrapper } from "./styled";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product, isProductLoading } = useFetchProduct(productId!);
  const { comments, isCommentLoading } = useFetchComment(productId!);
  const { setTitle, setRightIcon } = useTopBarStore();
  const { open, handleOpen, menuRef } = useKebabMenu();

  /**
   * 거래 희망 장소 클릭
   */
  const handleLocationMapClick = () => {
    // 거래희망장소 페이지 이동
    navigate("/transaction-location");
  };

  /**
   * (구매자) 차단
   */
  const handleBlock = () => {
    // TODO 차단
  };

  /**
   * (구매자) 신고
   */
  const handleReport = () => {
    // TODO 신고
  };

  /**
   * (구매자) 입찰 취소
   */
  const handleCancelBid = () => {
    // TODO 입찰 취소
  };

  /**
   * (판매자) 조기마감
   */
  const handleEarlyClosing = () => {
    // TODO 조기마감
  };

  /**
   * (판매자) 수정하기
   */
  const handleEdit = () => {
    if (product && !product.hasBuyer) {
      // 수정 페이지로 이동
      navigate(`/product?${productId!}`);
      return;
    }
  };

  /**
   * (판매자) 삭제하기
   */
  const handleDelete = () => {
    if (product && !product.hasBuyer) {
      // TODO 삭제 처리
      navigate("/", { replace: true });
      return;
    }
  };

  useEffect(() => {
    setRightIcon(KebabIcon, () => {
      handleOpen();
    });
  }, []);

  useEffect(() => {
    if (!isProductLoading && product) {
      setTitle(product.title);
    }
  }, [isProductLoading, product]);

  if (isProductLoading || isCommentLoading) {
    // TODO 스켈레톤 UI
    return null;
  }

  if (!product) {
    // 에러페이지로 이동
    return <Navigate to="/error" replace />;
  }

  return (
    // 	TODO 로딩...
    <Suspense fallback={null}>
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
        minimumPrice={product.minimumPrice}
        myPrice={product.myPrice}
        maximumPrice={product.maximumPrice}
        isEarly={product.isEarly}
        productId={product.productId}
        hasBuyer={product.hasBuyer}
        onCancel={handleCancelBid}
        onEarlyClosing={handleEarlyClosing}
        isSeller={product.isSeller}
      />
      {open && (
        <KebabWrapper ref={menuRef}>
          <KebabMenu>
            {product.isSeller && (
              <>
                <KebabMenu.Button content="수정하기" onClick={handleEdit} />
                <KebabMenu.Button content="삭제하기" onClick={handleDelete} />
              </>
            )}
            {!product.isSeller && (
              <>
                <KebabMenu.Button content="차단하기" onClick={handleBlock} />
                <KebabMenu.Button content="신고하기" onClick={handleReport} />
              </>
            )}
          </KebabMenu>
        </KebabWrapper>
      )}
    </Suspense>
  );
};
