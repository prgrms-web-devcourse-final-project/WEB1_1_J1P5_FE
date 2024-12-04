import { useEffect, useState } from "react";
import { InputWithButton } from "components/molecules";
import { ChatBubble, type IChatBubbleProps } from "../ChatBubble";
import {
  ChatBubblesWrapper,
  ChatMessagesWrapper,
  WriteBoxWrapper,
} from "./styled";

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
        {chatBubbles.map((bubble, idx) => (
          <ChatBubble key={`chat_bubble_${idx}`} {...bubble} />
        ))}
      </ChatBubblesWrapper>
      <div ref={scrollContainerRef}></div>
      <WriteBoxWrapper>
        <InputWithButton
          value={message}
          setValue={setMessage}
          placeholder="메시지를 입력하세요."
          buttonText="전송"
          onButtonClick={handleSendButtonClick}
        />
      </WriteBoxWrapper>
    </ChatMessagesWrapper>
  );
};
