import { ChatMessages } from "components/organisms";
import { ChatRoomTemplateWrapper } from "./styled";
import { IPost } from "components/organisms/PostList";
import { IChatBubbleProps } from "components/organisms/ChatBubble";

export interface IChatRoomTemplateProps {
  /** 상품 정보 목록 */
  post: IPost;
  /** ChatBubble 목록 */
  chatBubbles: IChatBubbleProps[];
  /** 메시지 전송시 실행할 함수 */
  onWriteMessage: (message: string) => void;
  /** 스크롤 컨테이너를 참조할 ref */
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

export const ChatRoomTemplate = ({
  //post,
  chatBubbles,
  onWriteMessage,
  scrollContainerRef,
}: IChatRoomTemplateProps) => {
  return (
    <ChatRoomTemplateWrapper>
      {/* 임시 주석 처리
       <div> 
        <PostList posts={[post]} type={"chat"}></PostList>
      </div> */}
      <ChatMessages
        chatBubbles={chatBubbles}
        onWriteMessage={onWriteMessage}
        scrollContainerRef={scrollContainerRef}
      ></ChatMessages>
    </ChatRoomTemplateWrapper>
  );
};
