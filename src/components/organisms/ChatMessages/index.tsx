import { useEffect, useState } from "react";
import { InputWithButton } from "components/molecules";
import { ChatBubble, type IChatBubbleProps } from "../ChatBubble";
import {
  ChatBubblesWrapper,
  ChatMessagesWrapper,
  WriteBoxWrapper,
} from "./styled";
import ChatDay from "../ChatDay/ChatDay";
import { areDatesDifferent } from "utils";

interface IComponentProps {
  /** ChatBubble 목록 */
  chatBubbles: IChatBubbleProps[];
  /** 메시지 전송시 실행할 함수 */
  onWriteMessage: (message: string) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

export const ChatMessages = ({
  chatBubbles,
  onWriteMessage,
  scrollContainerRef,
}: IComponentProps) => {
  const [message, setMessage] = useState("");
  const handleSendButtonClick = () => {
    if (!message.trim()) {
      return;
    }
    onWriteMessage(message);
    setMessage("");
  };

  useEffect(() => {
    scrollTo({ top: window.innerHeight });
  }, []);

  return (
    <ChatMessagesWrapper>
      <ChatBubblesWrapper>
        {chatBubbles.map((bubble, idx) => {
          /** 채팅 메시지 받았을 때 날짜 바뀐 부분 표시하기 위한 로직 */
          const currentCreatedAt = bubble.chats[0].createdAt; // string으로 가정
          const previousCreatedAt =
            idx > 0 ? chatBubbles[idx - 1].chats[0].createdAt : null;
          if (idx === 0) console.log(currentCreatedAt);
          return (
            <div key={`chat_bubble_${idx}`}>
              {(idx === 0 ||
                (previousCreatedAt &&
                  areDatesDifferent(currentCreatedAt, previousCreatedAt))) && (
                <div className="chat-date">
                  <ChatDay
                    date={new Date(currentCreatedAt).toLocaleDateString()}
                  />
                </div>
              )}
              <ChatBubble {...bubble} />
            </div>
          );
        })}
      </ChatBubblesWrapper>
      <div ref={scrollContainerRef}></div>
      <WriteBoxWrapper>
        <InputWithButton
          value={message}
          setValue={setMessage}
          placeholder="메시지를 입력하세요."
          buttonText="전송"
          isIcon={true}
          onButtonClick={handleSendButtonClick}
        />
      </WriteBoxWrapper>
    </ChatMessagesWrapper>
  );
};
