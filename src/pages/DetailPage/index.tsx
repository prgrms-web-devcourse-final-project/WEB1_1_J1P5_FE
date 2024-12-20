import { Suspense, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailTemplate } from "components/templates";
import { KebabMenu } from "components/molecules";
import { KebabIcon } from "components/atoms/Icon";
import { Loading } from "components/molecules/Loading";
import {
  useFormDataStore,
  useModalStore,
  useSelectedLocationStore,
  useTopBarStore,
} from "stores";
import {
  useFetchProduct,
  useFetchComment,
  useKebabMenu,
  useBid,
  useDetailModal,
} from "hooks";
import { KebabWrapper } from "./styled";
import { deleteProduct, earlyClose, reportUser, blockUser as blockSeller } from "services/apis";
import type { Category, ReportType } from "types";
import { Toast } from "components/atoms";
import { isExpired } from "../../utils";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product, isProductLoading, productRefetch, isProductRefetching } =
    useFetchProduct(productId!);
  const { comments, isCommentLoading } = useFetchComment(productId!);
  const {
    actions: { closeModal },
  } = useModalStore();
  const { clear, setTitle, setRightIcon } = useTopBarStore();
  const {
    actions: { setCoord, setLocation, setAddress },
  } = useSelectedLocationStore();
  // TODO
  const { setFormData, setProductId } = useFormDataStore();
  const { open, handleOpen, handleClose, menuRef } = useKebabMenu();
  const { handleCancel } = useBid(parseInt(productId!));
  const { removeNoBuyer, removeHasBuyer, reportPost, reportComplete, blockUser, blockUserComplete } =
    useDetailModal();
  const isExpiredTime = useMemo(
    () => !!product?.expiredTime && isExpired(product?.expiredTime),
    [isProductRefetching]
  );

  /**
   * 거래 희망 장소 클릭
   */
  const handleLocationMapClick = () => {
    if (product) {
      setCoord({
        lat: product.productLocation.latitube,
        lng: product.productLocation.longitude,
      });
      setLocation(product.productLocation.location);
      setAddress(product.productLocation.address);
    }
    navigate("/transaction-location");
  };

  /**
   * (구매자) 차단
   */
  const handleBlock = () => {
    if (!product?.seller.id) return;

    blockUser(() => {
      blockSeller(product.seller.id).then(() => {
        blockUserComplete();
        navigate("/", { replace: true });
      }).catch(() => { 
        console.error();
        closeModal();
      });
    });

    handleClose();
  };

  /**
   * (구매자) 신고
   */
  const handleReport = () => {
    reportPost(() => {
      if (product) {
        const requestData = {
          title: product.title,
          content: product.content,
          reportType: "POST" as ReportType,
          targetId: product.seller.id,
        };
        reportUser(requestData)
          .then(() => {
            reportComplete();
          })
          .catch(() => {
            console.error();
            closeModal();
          });
      }
    });
    handleClose();
  };

  /**
   * (구매자) 입찰 취소
   */
  const handleCancelBid = () => {
    if (!product) {
      return;
    }
    // TODO 조기마감 적용된 경우 처리
    if (product?.myAuctionId) {
      handleCancel(product.myAuctionId, product.isEarly);
    }
  };

  /**
   * (판매자) 조기마감
   */
  const handleEarlyClosing = () => {
    // TODO 조기마감
    if (product?.isSeller) {
      earlyClose(productId!)
        .then((data) => {
          console.log(data);
          productRefetch().catch(console.error);
          Toast.show("조기 종료가 적용되었습니다.", 2000);
          closeModal();
        })
        .catch(console.error);
    }
  };

  /**
   * (판매자) 수정하기
   */
  const handleEdit = () => {
    if (!product) {
      return;
    }
    if (product.hasBuyer) {
      // TODO 구매자 있는 게시글은 수정할 수 없습니다. 모달
      Toast.show("구매자가 있는 게시물은 수정할 수 없습니다.", 2000);
      handleClose();
      return;
    }
    if (!product.hasBuyer) {
      // 수정 페이지로 이동
      // TODO 확인 필요
      setProductId(productId!);
      setFormData({
        title: product.title,
        content: product.content,
        minimumPrice: product.minimumPrice.toLocaleString(),
        category: product.category as Category,
        latitude: product.productLocation.latitube,
        longitude: product.productLocation.longitude,
        address: product.productLocation.address,
        location: product.productLocation.location,
        imgUrls: product.images.map((img) => ({ url: img, file: null })),
        expiredTime: product.expiredTime,
      });
      navigate(`/product?productId=${productId!}`);
      return;
    }
  };

  /**
   * (판매자) 삭제하기
   */
  const handleDeleteProduct = () => {
    deleteProduct(productId!)
      .then((data) => {
        console.log(data);
        Toast.show("삭제되었습니다.", 2000);
        navigate("/", { replace: true });
        closeModal();
      })
      .catch(console.error);
  };
  const handleDelete = () => {
    if (!product) {
      return;
    }
    if (product.hasBuyer) {
      removeHasBuyer(handleDeleteProduct);
      handleClose();
      return;
    }
    if (!product.hasBuyer) {
      removeNoBuyer(handleDeleteProduct);
      handleClose();
      return;
    }
  };

  useEffect(() => {
    setRightIcon(
      KebabIcon,
      isExpiredTime ? () => Toast.show("마감된 상품입니다.", 2000) : handleOpen
    );
    return () => {
      clear();
    };
  }, [isExpiredTime]);

  useEffect(() => {
    if (!isProductLoading && product) {
      setTitle(product.title);
    }
  }, [isProductLoading, product]);

  if (isProductLoading || isCommentLoading) {
    return <Loading />;
  }

  if (!product) {
    return null;
  }

  return (
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
        maximumPrice={product.winningPrice}
        isEarly={product.isEarly}
        productId={product.productId}
        hasBuyer={product.hasBuyer}
        onCancel={handleCancelBid}
        onEarlyClosing={handleEarlyClosing}
        isSeller={product.isSeller}
        myAuctionId={product.myAuctionId}
      />
      {open && !isExpiredTime && (
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
                <KebabMenu.Button
                  content="유저 차단하기"
                  onClick={handleBlock}
                />
                <KebabMenu.Button
                  content="유저 신고하기"
                  onClick={handleReport}
                />
              </>
            )}
          </KebabMenu>
        </KebabWrapper>
      )}
    </Suspense>
  );
};
