import { ChatListTemplateWrapper } from "./styled";
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatOverview } from "components/organisms";

interface IChatListTemplateProps {
  /** 채팅 방 아이템 리스트 Organisms/ChatItem 컴포넌트 참조  */
  allChatItems: IChatItemProps[];
  sellingChatItems: IChatItemProps[];
  buyingChatItems: IChatItemProps[];
  unreadChatItems: IChatItemProps[];
}

export const ChatListTemplate = ({
  allChatItems,
  sellingChatItems,
  buyingChatItems,
  unreadChatItems,
}: IChatListTemplateProps) => {
  return (
    <ChatListTemplateWrapper>
      <ChatOverview>
        <ChatOverview.List>
          <ChatOverview.Trigger index={0} title="전체" />
          <ChatOverview.Trigger index={1} title="판매" />
          <ChatOverview.Trigger index={2} title="구매" />
          <ChatOverview.Trigger index={3} title="안 읽은 채팅방" />
        </ChatOverview.List>
        <ChatOverview.Panel index={0} chatItems={allChatItems} />
        <ChatOverview.Panel index={1} chatItems={sellingChatItems} />
        <ChatOverview.Panel index={2} chatItems={buyingChatItems} />
        <ChatOverview.Panel index={3} chatItems={unreadChatItems} />
      </ChatOverview>
    </ChatListTemplateWrapper>
  );
};
