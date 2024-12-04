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
  overflow-x: auto;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    `
    & * {
      pointer-events: none;
    }
  `}

  ${UploadedImageCounterContainer} {
    min-width: 100px;

    ${({ disabled }) =>
      disabled &&
      `
      filter: grayscale(1);
    `}
  }

  ${PostImageItemWrapper} {
    ${({ disabled }) =>
      disabled &&
      `
      filter: grayscale(1);
    `}
  }
`;

export const PostImageListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
`;
