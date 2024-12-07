import styled from "@emotion/styled";
import { UploadedImageCounterContainer } from "components/molecules/UploadedImageCounter/styled";
import { PostImageItemWrapper } from "components/organisms/PostImageItem/styled";
interface PostImageManagerWrapperProps {
  disabled?: boolean;
}

export const PostImageManagerWrapper: ReturnType<
  typeof styled.div<PostImageManagerWrapperProps>
> = styled.div<PostImageManagerWrapperProps>`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    `
    & * {
      pointer-events: none;
    }
  `}

  ${UploadedImageCounterContainer}, ${PostImageItemWrapper} {
    width: 106px;
    height: 106px;
    aspect-ratio: 1 / 1;
    border-radius: 10px;

    ${({ disabled }) =>
      disabled &&
      `
      filter: grayscale(1);
    `}
  }
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

export const PostImageListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 8px;
`;
