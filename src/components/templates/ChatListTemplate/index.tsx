import {} from "components/atoms";
import { TabMenu } from "components/molecules";
import { ChatListTemplateWrapper } from "./styled";
import { IChatItemProps } from "components/organisms/ChatItem";
import { ChatList } from "components/organisms";
import { EmptyTemplate } from "../EmptyTemplate";

interface IChatListTemplateProps {
  /** 탭 메뉴 title 리스트 */
  menus: string[];
  /** 탭 메뉴 클릭 이벤트 */
  onClick: (tab: string) => void;
  /** 채팅 방 아이템 리스트 Organisms/ChatItem 컴포넌트 참조  */
  chatItems: IChatItemProps[];
}

export const ChatListTemplate = ({
  menus,
  onClick,
  chatItems,
}: IChatListTemplateProps) => {
  return (
    <ChatListTemplateWrapper>
      <TabMenu menus={menus} onClick={onClick}></TabMenu>
      <div className="chat-con">
        {chatItems.length === 0 ? (
          <EmptyTemplate type={"chat"}></EmptyTemplate>
        ) : (
          <ChatList chatItems={chatItems}></ChatList>
        )}
      </div>
    </ChatListTemplateWrapper>
  );
};
