import styled from "@emotion/styled";
import { ChatMessagesWrapper } from "components/organisms/ChatBubble/styled";
import { PostListWrapper } from "components/organisms/PostList/styled";

export const ChatRoomTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  display: flex;
  flex-direction: column;

  ${PostListWrapper} {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #eeeeee;
  }

  ${ChatMessagesWrapper} {
    margin-top: 108px;
  }
`;
