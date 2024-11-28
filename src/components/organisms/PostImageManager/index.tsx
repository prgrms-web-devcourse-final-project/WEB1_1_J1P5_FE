import { Fragment, useEffect, useState } from "react";
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
  const onChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result;
      if (typeof url === "string") {
        setImgUrls((prev) => [...prev, url]);
      }
    };
    reader.readAsDataURL(file);
  };

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
              onClick={() => {
                setImgUrls((prev) => prev.filter((_, i) => i !== index));
              }}
            />
          </Fragment>
        ))}
      </PostImageListWrapper>
    </PostImageManagerWrapper>
  );
};

