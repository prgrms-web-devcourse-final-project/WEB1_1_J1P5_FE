import styled from "@emotion/styled";
import { ImageWrapper } from "components/atoms/Image/styled";
import type { IChatBubbleProps } from ".";

export const ChatMessagesWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ChatBubbleWrapper: ReturnType<
  typeof styled.div<Pick<IChatBubbleProps, "isMe">>
> = styled.div<Pick<IChatBubbleProps, "isMe">>`
  display: flex;
  flex-direction: ${({ isMe }) => (isMe ? "row-reverse" : "row")};
  gap: 0.25rem;
  ${ImageWrapper} {
    width: 60px;
    height: 60px;
  }
`;
