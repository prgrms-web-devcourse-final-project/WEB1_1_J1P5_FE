import { Suspense, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { DetailTemplate } from "components/templates";
import { KebabIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { useFetchProduct, useFetchComment } from "hooks";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product, isProductLoading } = useFetchProduct(productId!);
  const { comments, isCommentLoading } = useFetchComment(productId!);
  const { setTitle, setRightIcon } = useTopBarStore();
  //
  // const [comments] = useState<IComment[]>([]);
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
    </Suspense>
  );
};
