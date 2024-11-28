import {} from "components/atoms";
import {} from "components/molecules";
import { ChatListWrapper } from "./styled";
import { ChatItem, IChatItemProps } from "../ChatItem";

interface IChatListProps {
  /** 채팅 방 아이템 리스트 Organisms/ChatItem 컴포넌트 참조  */
  chatItems: IChatItemProps[];
}

export const ChatList = ({ chatItems }: IChatListProps) => {
  return (
    <ChatListWrapper>
      {chatItems.map((chatItem, idx) => {
        return (
          <ChatItem
            key={idx}
            profileImgUrl={chatItem.profileImgUrl}
            itemImgUrl={chatItem.itemImgUrl}
            name={chatItem.name}
            lastMsg={chatItem.lastMsg}
            lastMsgTime={chatItem.lastMsgTime}
            lastMsgCnt={chatItem.lastMsgCnt}
            onClick={chatItem.onClick}
          ></ChatItem>
        );
      })}
    </ChatListWrapper>
  );
};
