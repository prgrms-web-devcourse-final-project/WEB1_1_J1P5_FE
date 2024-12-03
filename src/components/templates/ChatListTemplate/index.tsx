import { ChatListTemplateWrapper } from "./styled";
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatOverview } from "components/organisms";
import { chatRoomTabMap, chatRoomTabMapKey } from "constants/Chat";

interface IChatListTemplateProps {
  /** 채팅 방 아이템 리스트 Organisms/ChatItem 컴포넌트 참조  */
  allChatItems: IChatItemProps[];
  sellingChatItems: IChatItemProps[];
  buyingChatItems: IChatItemProps[];
  unreadChatItems: IChatItemProps[];
  onClick: (tab: chatRoomTabMapKey) => void;
}

export const ChatListTemplate = ({
  allChatItems,
  sellingChatItems,
  buyingChatItems,
  unreadChatItems,
  onClick,
}: IChatListTemplateProps) => {
  const TabArr = Array.from(chatRoomTabMap.keys());
  return (
    <ChatListTemplateWrapper>
      <ChatOverview onClick={onClick}>
        <ChatOverview.List>
          <ChatOverview.Trigger index={0} title={TabArr[0]} />
          <ChatOverview.Trigger index={1} title={TabArr[1]} />
          <ChatOverview.Trigger index={2} title={TabArr[2]} />
          <ChatOverview.Trigger index={3} title={TabArr[3]} />
        </ChatOverview.List>
        <ChatOverview.Panel index={0} chatItems={allChatItems} />
        <ChatOverview.Panel index={1} chatItems={sellingChatItems} />
        <ChatOverview.Panel index={2} chatItems={buyingChatItems} />
        <ChatOverview.Panel index={3} chatItems={unreadChatItems} />
      </ChatOverview>
    </ChatListTemplateWrapper>
  );
};
