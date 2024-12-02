import { Fragment, useCallback } from "react";
import { UploadedImageCounter } from "components/molecules";
import { PostImageItem } from "components/organisms";

import { PostImageManagerWrapper, PostImageListWrapper } from "./styled";
import { IImageInfo } from "types";

interface IPostImageManagerProps {
  /** ImageInfo 배열 (url: S3에 업로드 된 이미지 url, base64Url: 아직 S3에 올라가지 않아서 미리보기만 제공되는 url, file: 아직 안올라간 이미지들을 나중에 S3에 올리기 위해 필요한 file)*/
  imageInfos: IImageInfo[];
  /** imageInfos를 설정하는 함수 */
  setImageInfos: React.Dispatch<React.SetStateAction<IImageInfo[]>>;
}

export const PostImageManager = ({
  imageInfos,
  setImageInfos
}: IPostImageManagerProps) => {
  const onChange = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Url = e.target?.result as string;
        const newImgData: IImageInfo = {
          url: "",
          base64Url,
          file
        };
        setImageInfos((prev) => [...prev, newImgData]);
      };
      reader.readAsDataURL(file);
    },
    [setImageInfos]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      setImageInfos((prev) => prev.filter((_, i) => i !== index));
    },
    [setImageInfos]
  );

  return (
    <PostImageManagerWrapper>
      <UploadedImageCounter
        text="사진 등록"
        currentCount={imageInfos.length}
        onChange={onChange}
      />
      <PostImageListWrapper>
        {imageInfos.map((info, index) => (
          <Fragment key={index}>
            <PostImageItem
              imgUrl={(info.url || info.base64Url) as string}
              isThumbnail={index === 0}
              onClick={() => handleRemoveImage(index)}
            />
          </Fragment>
        ))}
      </PostImageListWrapper>
    </PostImageManagerWrapper>
  );
};
