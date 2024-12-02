import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Text, TextButton } from "components/atoms";
import {
  LabeledInput,
  LabeledSelect,
  LabeledTextarea
} from "components/molecules";
import { PostImageManager } from "components/organisms";
import { PostRegisterFormWrapper, DivWrapper } from "./styled";
import type { IPostForm, IImageInfo, ISelectOption } from "types";

interface IPostRegisterFormProps {
  /** product Id */
  productId?: number;
  /** 글 등록할 때 필요한 form 데이터 */
  postForm?: IPostForm;
  /** Submit 이벤트 발생 시 실행할 함수 */
  onSubmit: (data: IPostForm) => void;
  /** 거래 희망 장소 클릭 시 실행할 함수 */
  onClick: () => string;
}

const categories: ISelectOption[] = [
  { value: "디지털/가전", label: "디지털/가전" },
  { value: "가구/인테리어", label: "가구/인테리어" },
  { value: "유아동/유아도서", label: "유아동/유아도서" },
  { value: "생활/가공식품", label: "생활/가공식품" },
  { value: "스포츠/레저", label: "스포츠/레저" }
];

const expiredTimes: ISelectOption[] = [
  { value: "3일 후", label: "3일 후" },
  { value: "2일 후", label: "2일 후" },
  { value: "1일 후", label: "1일 후" },
  { value: "12시간 후", label: "12시간 후" },
  { value: "6시간 후", label: "6시간 후" }
];

export const PostRegisterForm = ({
  productId,
  postForm,
  onSubmit,
  onClick
}: IPostRegisterFormProps) => {
  const [imageInfos, setImageInfos] = useState<IImageInfo[]>(
    postForm?.imgUrls || []
  );

  const { control, handleSubmit, setValue } = useForm<IPostForm>({
    mode: "onBlur",
    defaultValues: {
      title: postForm?.title || "",
      content: postForm?.content || "",
      price: postForm?.price,
      category: postForm?.category,
      expiredTime: postForm?.expiredTime,
      location: postForm?.location || ""
    }
  });

  useEffect(() => {
    setValue("imgUrls", imageInfos);
  }, [imageInfos, setValue]);

  return (
    <PostRegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="imgUrls"
        control={control}
        render={() => (
          <PostImageManager
            imageInfos={imageInfos}
            setImageInfos={setImageInfos}
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        rules={{
          required: "카테고리는 필수 입력 항목입니다."
        }}
        render={({
          field: { onChange, value },
          fieldState: { invalid },
          formState
        }) => (
          <DivWrapper>
            <LabeledSelect
              id="product-category"
              label="카테고리"
              options={categories}
              value={categories.find((option) => option.value === value)}
              onChange={(option) => onChange(option)}
              placeholder="카테고리를 검색해보세요!"
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.category?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <Controller
        name="title"
        control={control}
        rules={{
          required: "제목은 필수 입력 항목입니다."
        }}
        render={({ field: { value }, fieldState: { invalid }, formState }) => (
          <DivWrapper>
            <LabeledInput
              id="product-title"
              label="제목"
              value={value}
              setValue={(value) => {
                setValue("title", value);
              }}
              placeholder="제목을 입력해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.title?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <Controller
        name="content"
        control={control}
        rules={{
          required: "설명은 필수 입력 항목입니다."
        }}
        render={({ field: { value }, fieldState: { invalid }, formState }) => (
          <DivWrapper>
            <LabeledTextarea
              id="product-content"
              label="설명"
              value={value}
              setValue={(value) => {
                setValue("content", value);
              }}
              placeholder="이 상품은 어떤 특징을 가지고 있나요? 상세한 설명을 입력해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.content?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <Controller
        name="price"
        control={control}
        rules={{
          required: "최종 입찰가는 필수 입력 항목입니다."
        }}
        render={({ field: { value }, fieldState: { invalid }, formState }) => (
          <DivWrapper>
            <LabeledInput
              type="number"
              id="product-price"
              label="최종 입찰가"
              value={value?.toString()}
              setValue={(value) => {
                setValue("price", parseInt(value, 10));
              }}
              placeholder="최종 입찰가를 입력해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.price?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <Controller
        name="expiredTime"
        control={control}
        rules={{
          required: "경매 마감 일시는 필수 입력 항목입니다."
        }}
        render={({
          field: { onChange, value },
          fieldState: { invalid },
          formState
        }) => (
          <DivWrapper>
            <LabeledSelect
              id="product-expiredTime"
              label="경매 마감 일시"
              options={expiredTimes}
              value={expiredTimes.find((option) => option.value === value)}
              onChange={(option) => onChange(option)}
              placeholder="경매 마감 일시를 선택해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.expiredTime?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <Controller
        name="location"
        control={control}
        rules={{
          required: "거래 희망 장소는 필수 입력 항목입니다."
        }}
        render={({ field: { value }, fieldState: { invalid }, formState }) => (
          <DivWrapper>
            <LabeledInput
              id="product-location"
              label="거래 희망 장소"
              value={value}
              onClick={() => {
                const clickedValue = onClick();
                // 나중에 주스탄드로 가져와야 할 듯
                setValue("location", clickedValue);
              }}
              placeholder="거래 희망 장소를 입력해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.location?.message || ""}
              />
            )}
          </DivWrapper>
        )}
      />
      <TextButton
        size="l"
        text={`${productId ? "수정" : "등록"} 완료`}
        onClick={() => handleSubmit(onSubmit)}
      />
    </PostRegisterFormWrapper>
  );
};

