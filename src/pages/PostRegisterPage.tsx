import { PostRegisterTemplate } from "components/templates";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormDataStore, useTopBarStore } from "stores";
import type {
  IPostForm,
  Category,
  ExpiredTime,
  INewPostForm,
  IResponse
} from "types";
import { getExpiredDate } from "utils";
import { http } from "services/api";
import { useFetchProduct } from "hooks";

interface IProductsResponse extends IResponse {
  /**
   * 현재 result 타입이 빈 객체인데, productID를 받아올 필요가 있음
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  result: {};
}

// newProduct 객체를 POST 요청으로 전송하는 함수
const submitNewProduct = async (newProduct: INewPostForm): Promise<void> => {
  try {
    const requestBody = new FormData();
    const jsonRequestData = JSON.stringify({
      title: newProduct.title,
      content: newProduct.content,
      minimumPrice: newProduct.minimumPrice,
      category: newProduct.category,
      latitude: newProduct.latitude,
      longitude: newProduct.longitude,
      address: newProduct.address,
      location: newProduct.location,
      expiredTime: newProduct.expiredTime
    });

    const request = new Blob([jsonRequestData], { type: "application/json" });
    requestBody.append("request", request);
    newProduct.images!.forEach((img) => {
      requestBody.append("images", img);
    });

    await http.post<IProductsResponse, typeof requestBody>(
      "/products",
      requestBody,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
  } catch (error) {
    console.error("Failed to submit new product:", error);
  }
};

const updateProduct = async (
  productId: number,
  updatedProduct: INewPostForm
): Promise<void> => {
  try {
    const productToUpdate = { ...updatedProduct, productId };

    delete productToUpdate.images;
    delete productToUpdate.expiredTime;

    await http.patch<IProductsResponse, typeof productToUpdate>(
      `/products/${productId}`,
      productToUpdate
    );
  } catch (error) {
    console.error("Failed to update product:", error);
  }
};

export const PostRegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTitle } = useTopBarStore();

  const queryParams = new URLSearchParams(location.search);
  const productId = Number(queryParams.get("productId"));

  const { formData } = useFormDataStore((state) => state);
  const lat = useFormDataStore((state) => state.formData.latitude);
  const lng = useFormDataStore((state) => state.formData.longitude);
  const address = useFormDataStore((state) => state.formData.address);

  const { setFormData, clear } = useFormDataStore((state) => state.actions);

  useEffect(() => {
    if (productId) {
      // TODO: productId가 있을 때만 불러와야 하는데, eslint를 disable하지 않고 처리하는 방법 찾기
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { product } = useFetchProduct(productId.toString());
      if (product) {
        setFormData({
          title: product.title,
          content: product.content,
          minimumPrice: product.minimumPrice.toLocaleString(),
          category: product.category as Category,
          // TODO: 백엔드에서 이름 고치면 수정하기
          // latitude: product.productLocation.latitude,
          // longitude: product.productLocation.longitude,
          latitude: product.productLocation.latitube,
          longitude: product.productLocation.longtitude,
          address: product.productLocation.address,
          location: product.productLocation.location,
          imgUrls: product.images.map((img) => ({ url: img, file: null })),
          expiredTime: product.expiredTime
        });
      }
    }
  }, [productId, setFormData]);

  const handleSubmit = useCallback(
    async (formData: IPostForm) => {
      // TODO: 이미지가 없는 경우 처리

      if (formData.category && typeof formData.category === "object") {
        formData.category = formData.category.value as Category;
      }
      if (
        !productId &&
        formData.expiredTime &&
        typeof formData.expiredTime === "object"
      ) {
        formData.expiredTime = formData.expiredTime.value as ExpiredTime;
      }

      const newProduct: INewPostForm = {
        title: formData.title!,
        content: formData.content!,
        minimumPrice: Number(formData.minimumPrice!),
        category: formData.category!,
        latitude: lat!,
        longitude: lng!,
        address: address!,
        location: formData.location!,
        images: formData.imgUrls!.map((img) => img.file!),
        expiredTime: getExpiredDate(formData.expiredTime as string)
      };

      try {
        console.log(newProduct);
        if (!productId) {
          await submitNewProduct(newProduct);
          navigate(`/`);
        } else {
          await updateProduct(productId, newProduct);
          navigate(`/product/${productId}`);
        }

        clear();
      } catch (error) {
        console.error("Failed to submit new product:", error);
      }
    },
    [lat, lng, address, clear, navigate, productId]
  );

  const handleClick = useCallback(
    (formData: IPostForm) => {
      console.log(formData);
      if (formData.category && typeof formData.category === "object") {
        formData.category = formData.category.value as Category;
      }
      if (formData.expiredTime && typeof formData.expiredTime === "object") {
        formData.expiredTime = formData.expiredTime.value as ExpiredTime;
      }

      setFormData(formData);
      navigate("/location-selection");
    },
    [navigate, setFormData]
  );

  useEffect(() => {
    setTitle("내 물건 판매하기");
  }, [setTitle]);

  return (
    <PostRegisterTemplate
      productId={productId || undefined}
      postForm={formData}
      onClick={handleClick}
      onSubmit={handleSubmit}
    />
  );
};

/**
 * 이미지 업로드 시 응답 받는 타입 (고도화에서 사용)
 */
// interface IImageResponse extends IResponse {
//   result: {
//     url: string;
//   };
// }

/**
 * 파일을 업로드하고 URL을 반환하는 함수 (고도화에서 사용)
 * @param file
 * @returns
 */
// const uploadImage = async (file: File): Promise<string> => {
//   const imgFormData = new FormData();
//   imgFormData.append("imageFile", file);

//   try {
//     const response = await http.post<IImageResponse, FormData>(
//       "/products/image",
//       imgFormData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       }
//     );
//     if (response.success && response.code === "COMMON200") {
//       return response.result.url;
//     }
//   } catch (error) {
//     console.error("Failed to fetch messages:", error);
//   }
//   return "";
// };

/**
 * 이미지 업로드를 처리하는 함수 (수정할 때 사용 - 현재 이미지 수정 불가능)
 * @param imgInfos
 * @returns
 */
// const handleImageUpload = async (
//   imgInfos: IImageInfo[]
// ): Promise<IImgUrl[]> => {
//   const uploadPromises = imgInfos.map(async (imgInfo) => {
//     if (imgInfo.url) {
//       return { url: imgInfo.url } as IImgUrl;
//     } else if (imgInfo.file) {
//       const url = await uploadImage(imgInfo.file);
//       return { url } as IImgUrl;
//     } else {
//       throw new Error("이미지 정보가 유효하지 않습니다.");
//     }
//   });

//   const images = await Promise.all(uploadPromises);
//   return images;
// };

// // 기존 데이터를 가져오는 함수
// // TODO: 상세 조회는 내용이 너무 많아서 타입 따로 파야함
// const fetchProductData = async (productId: number): Promise<INewPostForm> => {
//   try {
//     const response = await http.get<IProductsResponse, INewPostForm>(
//       `/products/${productId}`
//     );
//     return response.result;
//   } catch (error) {
//     console.error("Failed to fetch product data:", error);
//     throw error;
//   }
// };
