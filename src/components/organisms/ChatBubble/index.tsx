import { Image } from "components/atoms";
import { ChatMessage } from "components/organisms";
import type { IChat } from "types";
import { ChatBubbleWrapper, ChatMessagesWrapper } from "./styled";

export interface IChatBubbleProps {
  /** 채팅리스트 */
  chats: IChat[];
  /** 채팅 보낸 유저가 나인지 타인인지 구분 */
  isMe: boolean;
  /** 프로필 이미지 URL 경로 */
  imgUrl?: string;
}

export const ChatBubble = ({ chats, isMe, imgUrl }: IChatBubbleProps) => {
  return (
    <ChatBubbleWrapper isMe={isMe}>
      {!isMe && <Image type="round" url={imgUrl} alt="프로필 이미지" />}
      <ChatMessagesWrapper>
        {chats.map((chat, idx) => (
          <ChatMessage
            key={`chat_${isMe ? "me" : "other"}_${chat.createdAt}_${idx}`}
            isMe={isMe}
            {...chat}
            isLastMsg={chats.length - 1 === idx ? true : false}
          />
        ))}
      </ChatMessagesWrapper>
    </ChatBubbleWrapper>
  );
};
