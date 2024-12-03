import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import type { IPostItemImageProps } from ".";

export const PostItemImageWrapper: ReturnType<
  typeof styled.div<Pick<IPostItemImageProps, "size">>
> = styled.div<Pick<IPostItemImageProps, "size">>`
  width: ${({ size }) => (size === "mini" ? "60px" : "84px")};
`;

export const PostItemContainerWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostItemLocationAndTimeWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PostItemPriceWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostItemRemainingTimeWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostItemButtonContainerWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  ${TextButtonWrapper} {
    flex: 1;
  }
`;

export const PostItemRootWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 1rem;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: #eeeeee;
  }
`;
