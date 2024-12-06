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
import type { IPostForm, IImageInfo } from "types";
import { CATEGORY_OPTIONS, EXPIRED_TIMES } from "constants/options";
import { isISOFormat } from "utils";

interface IPostRegisterFormProps {
  /** product Id */
  productId?: string;
  /** 글 등록할 때 필요한 form 데이터 */
  postForm?: IPostForm;
  /** Submit 이벤트 발생 시 실행할 함수 */
  onSubmit: (data: IPostForm) => void;
  /** 거래 희망 장소 클릭 시 실행할 함수 */
  onClick: (data: IPostForm) => void;
}

export const PostRegisterForm = ({
  productId,
  postForm,
  onSubmit,
  onClick
}: IPostRegisterFormProps) => {
  const [imageInfos, setImageInfos] = useState<IImageInfo[]>(
    postForm?.imgUrls || []
  );

  const { control, handleSubmit, setValue, getValues } = useForm<IPostForm>({
    mode: "onBlur",
    defaultValues: {
      title: postForm?.title,
      content: postForm?.content,
      minimumPrice: postForm?.minimumPrice,
      category: postForm?.category,
      expiredTime: postForm?.expiredTime,
      location: postForm?.location
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
        rules={{
          validate: {
            notEmpty: (value) =>
              imageInfos.length > 0 || "이미지를 1개 이상 업로드해주세요."
          }
        }}
        render={({ fieldState: { invalid, error } }) => (
          <DivWrapper>
            <PostImageManager
              imageInfos={imageInfos}
              setImageInfos={setImageInfos}
              disabled={!!productId}
            />
            {invalid && (
              <Text variant="button" content={error?.message || ""} />
            )}
          </DivWrapper>
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
              options={CATEGORY_OPTIONS}
              value={CATEGORY_OPTIONS.find((option) => option.value === value)}
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
              value={value || ""}
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
              value={value || ""}
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
        name="minimumPrice"
        control={control}
        rules={{
          required: "최종 입찰가는 필수 입력 항목입니다."
        }}
        render={({ field: { value }, fieldState: { invalid }, formState }) => (
          <DivWrapper>
            <LabeledInput
              type="number"
              id="product-minimumPrice"
              label="최종 입찰가"
              value={value?.toString() || ""}
              setValue={(value) => {
                setValue("minimumPrice", parseInt(value, 10));
              }}
              placeholder="최종 입찰가를 입력해주세요."
            />
            {invalid && (
              <Text
                variant="button"
                content={formState.errors.minimumPrice?.message || ""}
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
        }) => {
          const expiredTimeDisabled = isISOFormat(postForm?.expiredTime || "");
          return (
            <DivWrapper>
              <LabeledSelect
                id="product-expiredTime"
                label="경매 마감 일시"
                options={
                  expiredTimeDisabled
                    ? [
                        {
                          value: postForm!.expiredTime as string,
                          label: postForm!.expiredTime as string
                        }
                      ]
                    : EXPIRED_TIMES
                }
                value={
                  expiredTimeDisabled
                    ? {
                        value: postForm!.expiredTime as string,
                        label: postForm!.expiredTime as string
                      }
                    : EXPIRED_TIMES.find((option) => option.value === value)
                }
                onChange={(option) => onChange(option)}
                placeholder="경매 마감 일시를 선택해주세요."
              />
              {!productId && (
                <Text
                  variant="button"
                  content="포스팅이 등록될 때 경매 마감 시간이 카운트됩니다."
                />
              )}
              {invalid && (
                <Text
                  variant="button"
                  content={formState.errors.expiredTime?.message || ""}
                />
              )}
            </DivWrapper>
          );
        }}
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
              value={value || ""}
              onClick={() => {
                const formData = getValues();
                onClick(formData);
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
