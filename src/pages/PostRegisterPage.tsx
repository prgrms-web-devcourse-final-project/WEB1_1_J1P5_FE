import { PostRegisterTemplate } from "components/templates";
import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormDataStore, useSelectedLocationStore } from "stores";
import type { IPostForm, Category, ExpiredTime } from "types";

export const PostRegisterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  const newProductId = productId ? Number(productId) : undefined;
  const locationData = useSelectedLocationStore((state) => state.location);

  const { formData } = useFormDataStore((state) => state);
  const { setFormData, clear } = useFormDataStore((state) => state.actions);

  const handleSubmit = (data: IPostForm) => {
    console.log(data);
    navigate(`/product/${newProductId}`);
    clear();
  };

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

  // id가 있으면 fetch해서 데이터 가져와서 form에 넣어주기
  // id가 없으면 빈 form
  // 지도 갔다가 돌아 오면 데이터 가져와서 form에 넣어주기
  // 그럼 임시 데이터들을 넣어놓을 곳이 필요함
  // 일단은 form에 들어가는 것만 처리

  const postForm = useMemo(() => {
    return {
      title: "",
      content: "",
      price: undefined,
      category: "",
      expiredTime: "",
      location: locationData,
      imgUrls: []
    };
  }, [locationData]);

  return (
    <PostRegisterTemplate
      productId={productId ? Number(productId) : undefined}
      postForm={formData}
      onClick={handleClick}
      onSubmit={handleSubmit}
    />
  );
};
