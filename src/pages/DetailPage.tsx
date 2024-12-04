import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailTemplate } from "components/templates";
import { KebabIcon } from "components/atoms/Icon";
import { useTopBarStore } from "stores";
import { useFetchProduct } from "hooks/useFetchProduct";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product, isLoading } = useFetchProduct(productId!);
  const { setTitle, setRightIcon } = useTopBarStore();
  const [comments] = useState([]);

  const handleLocationMapClick = () => {
    // 거래희망장소 페이지 이동
    navigate("/transaction-location");
  };

  const handleWriteComment = (message: string) => {
    // TODO 댓글 작성
    console.log(message);
  };

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
      bids={[
        { title: "최소 입찰가", price: 35000 },
        { title: "내 입찰가", price: 38000 },
      ]}
      buttons={[
        {
          title: "입찰하기",
          onClick: () => {
            console.log("BottomBidBar 오픈");
          },
        },
        {
          title: "취소하기",
          onClick: () => {
            console.log("취소 모달 오픈");
          },
        },
      ]}
      comments={comments}
      onWriteComment={handleWriteComment}
    />
  );
};
