import { Fragment, useCallback, useRef } from "react";
import { UploadedImageCounter } from "components/molecules";
import { PostImageItem } from "components/organisms";

import { PostImageManagerWrapper, PostImageListWrapper } from "./styled";
import { IImageInfo } from "types";
import { convertToWebP } from "utils";

interface IPostImageManagerProps {
  /** ImageInfo 배열 (url: S3에 업로드 된 이미지 url, base64Url: 아직 S3에 올라가지 않아서 미리보기만 제공되는 url, file: 아직 안올라간 이미지들을 나중에 S3에 올리기 위해 필요한 file)*/
  imageInfos: IImageInfo[];
  /** imageInfos를 설정하는 함수 */
  setImageInfos: React.Dispatch<React.SetStateAction<IImageInfo[]>>;
  /** disabled 여부 */
  disabled?: boolean;
}

export const PostImageManager = ({
  imageInfos,
  setImageInfos,
  disabled = false,
}: IPostImageManagerProps) => {
  // TODO: 임시로 넣은 gpt의 가로 스크롤 이벤트 코드 나중에 수정 필요 (코드 이해 및 애니메이션 추가)
  const wrapperRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.pageX - wrapperRef.current!.offsetLeft;
    scrollLeft = wrapperRef.current!.scrollLeft;
    wrapperRef.current!.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current!.offsetLeft;
    const walk = (x - startX) * 1;
    wrapperRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    wrapperRef.current!.style.cursor = "grab";
  };

  const onChange = useCallback(
    async (file: File) => {
      if (disabled) return;
      const resizedFile = await convertToWebP(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Url = e.target?.result as string;
        const newImgData: IImageInfo = {
          base64Url,
          file: resizedFile as File, // 변환 파일
        };
        setImageInfos((prev) => [...prev, newImgData]);
      };
      reader.readAsDataURL(resizedFile as File);
    },
    [setImageInfos, disabled]
  );

  /**
   * 라이브러리 안쓴 성능 저하 버전
   */
  // const onChangeLegacy = useCallback(
  //   async (file: File) => {
  //     if (disabled) return;
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const base64Url = e.target?.result as string;
  //       const newImgData: IImageInfo = {
  //         base64Url,
  //         file
  //       };
  //       setImageInfos((prev) => [...prev, newImgData]);
  //     };
  //     reader.readAsDataURL(file);
  //   },
  //   [setImageInfos, disabled]
  // );

  const handleRemoveImage = useCallback(
    (index: number) => {
      if (disabled) return;
      setImageInfos((prev) => prev.filter((_, i) => i !== index));
    },
    [setImageInfos, disabled]
  );

  return (
    <PostImageManagerWrapper
      ref={wrapperRef}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <UploadedImageCounter
        text='사진 등록'
        currentCount={imageInfos.length}
        onChange={onChange}
      />
      <PostImageListWrapper>
        {imageInfos.map((info, index) => (
          <Fragment key={index}>
            <PostImageItem
              imgUrl={info.url || (info.base64Url as string)}
              isThumbnail={index === 0}
              onClick={() => handleRemoveImage(index)}
            />
          </Fragment>
        ))}
      </PostImageListWrapper>
    </PostImageManagerWrapper>
  );
};
