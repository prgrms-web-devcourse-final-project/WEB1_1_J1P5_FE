import { ChatMessages, PostList } from "components/organisms";
import { ChatRoomTemplateWrapper } from "./styled";
import { IPost } from "components/organisms/PostList";
import { IChatBubbleProps } from "components/organisms/ChatBubble";

interface IChatRoomTemplateProps {
  /** 상품 정보 목록 */
  post: IPost;
  /** ChatBubble 목록 */
  chatBubbles: IChatBubbleProps[];
  /** 메시지 전송시 실행할 함수 */
  onWriteMessage: (message: string) => void;
}

export const ChatRoomTemplate = ({
  post,
  chatBubbles,
  onWriteMessage,
}: IChatRoomTemplateProps) => {
  return (
    <ChatRoomTemplateWrapper>
      <PostList posts={[post]} type={"chat"}></PostList>
      <ChatMessages
        chatBubbles={chatBubbles}
        onWriteMessage={onWriteMessage}
      ></ChatMessages>
    </ChatRoomTemplateWrapper>
  );
};
