import styled from "@emotion/styled";
import { PostListWrapper } from "components/organisms/PostList/styled";

export const ChatRoomTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  margin-top: 144px;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${PostListWrapper} {
    width: 100%;
    max-width: 375px;
    position: fixed;
    top: 48px;
    background-color: #eeeeee;
  }
`;
