import { Text } from "components/atoms";
import {
  ChatMessageWrapper,
  MessageInfoWrapper,
  MessageWrapper,
} from "./styled";
import { getTime } from "utils";

export interface IChatMessageProps {
  /** 채팅 메시지 내용 */
  msg: string;
  /** 채팅 보낸 유저가 나인지 타인인지 구분 */
  isMe: boolean;
  /** 해당 채팅이 그룹에서 마지막 메시지인지 구분,(시간 표시 유무 구분)*/
  isLastMsg: boolean;
  /** 해당 채팅을 읽었는지 구분 */
  isRead: boolean;
  /** 해당 메시지 보낸 시간 */
  createdAt: string;
}

export const ChatMessage = ({
  isMe,
  isRead,
  isLastMsg,
  msg,
  createdAt,
}: IChatMessageProps) => {
  return (
    <ChatMessageWrapper isMe={isMe}>
      <MessageWrapper>
        <Text content={msg} />
      </MessageWrapper>
      <MessageInfoWrapper>
        {!isRead && <Text variant="button" content={"1"} />}
        {isLastMsg && <Text variant="button" content={getTime(createdAt)} />}
      </MessageInfoWrapper>
    </ChatMessageWrapper>
  );
};
