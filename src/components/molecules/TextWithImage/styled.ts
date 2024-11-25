import styled from "@emotion/styled";
import { ITextWithImageProps } from ".";

export const TextWithImageWrapper: ReturnType<
  typeof styled.div<ITextWithImageProps>
> = styled.div<ITextWithImageProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .text-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    white-space: nowrap;
  }

  .text-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    white-space: normal;
  }
`;

