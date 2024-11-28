import { Fragment, useCallback } from "react";
import { UploadedImageCounter } from "components/molecules";
import { PostImageItem } from "components/organisms";

import { PostImageManagerWrapper, PostImageListWrapper } from "./styled";

interface IPostImageManagerProps {
  imgUrls: string[];
  setImgUrls: React.Dispatch<React.SetStateAction<string[]>>;
}

export const PostImageManager = ({
  imgUrls,
  setImgUrls
}: IPostImageManagerProps) => {
  const onChange = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result;
        if (typeof url === "string") {
          setImgUrls((prev) => [...prev, url]);
        }
      };
      reader.readAsDataURL(file);
    },
    [setImgUrls]
  );

  const handleRemoveImage = useCallback(
    (index: number) => {
      setImgUrls((prev) => prev.filter((_, i) => i !== index));
    },
    [setImgUrls]
  );

  return (
    <PostImageManagerWrapper>
      <UploadedImageCounter
        text="사진 등록"
        currentCount={imgUrls.length}
        onChange={onChange}
      />
      <PostImageListWrapper>
        {imgUrls.map((url, index) => (
          <Fragment key={index}>
            <PostImageItem
              imgUrl={url}
              isThumbnail={index === 0}
              onClick={() => handleRemoveImage(index)}
            />
          </Fragment>
        ))}
      </PostImageListWrapper>
    </PostImageManagerWrapper>
  );
};

