import {} from "components/atoms";
import { TabItem } from "components/molecules";
import { ChatList } from "components/organisms";
import { ChatOverviewRootWrapper, ListWrapper, PanelWrapper } from "./styled";
import { type Context, createContext, useContext, useState } from "react";

import { IChatItemProps } from "components/organisms/ChatItem";
import { chatRoomTabMapKey } from "constants/Chat";
import { EmptyTemplate } from "components/templates";

interface IChatOverviewRootProps {
  children: React.ReactNode;
  onClick?: (tab: chatRoomTabMapKey) => void; // onClick 핸들러 추가
}

interface IChatOverviewContextProps {
  /** 선택된 인덱스 */
  selectedIndex: number;
  /** 선택된 인덱스 변경 함수 */
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
  onClick?: (tab: chatRoomTabMapKey) => void; // onClick 핸들러 추가
}

const ChatOverviewContext: Context<IChatOverviewContextProps> =
  createContext<IChatOverviewContextProps>({
    selectedIndex: 0,
    setSelectedIndex: undefined,
    onClick: undefined, // 초기값으로 undefined 설정
  });

/**
 * ChatOverview 하위 컴포넌트에서 사용되는지 검사를 위한 훅
 */
const useChatOverview = () => {
  const context = useContext(ChatOverviewContext);
  if (!context) {
    throw new Error("Modal Context 내에서만 사용 가능합니다.");
  }
  return context;
};

/* -------------------------------------------------------------------
 * ChatOverview Root
 * ------------------------------------------------------------------- */

const ChatOverviewRoot = ({ children, onClick }: IChatOverviewRootProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const providerValue = { selectedIndex, setSelectedIndex, onClick };

  return (
    <ChatOverviewContext.Provider value={providerValue}>
      <ChatOverviewRootWrapper>{children}</ChatOverviewRootWrapper>
    </ChatOverviewContext.Provider>
  );
};

/* -------------------------------------------------------------------
 * List
 * ------------------------------------------------------------------- */

const List = ({ children }: IChatOverviewRootProps) => {
  return <ListWrapper>{children}</ListWrapper>;
};

/* -------------------------------------------------------------------
 * Trigger
 * ------------------------------------------------------------------- */

interface ITriggerProps {
  index: number;
  title: chatRoomTabMapKey;
}

const Trigger = ({ index, title }: ITriggerProps) => {
  const { selectedIndex, setSelectedIndex, onClick } = useChatOverview();
  const isActive = selectedIndex === index ? "active" : "default";

  const onSelect = () => {
    if (setSelectedIndex) {
      setSelectedIndex(index);
    }
    if (onClick) {
      onClick(title); // onClick 핸들러 호출
    }
  };

  return <TabItem state={isActive} title={title} onClick={onSelect}></TabItem>;
};

/* -------------------------------------------------------------------
 * Panel
 * ------------------------------------------------------------------- */

interface IPanelProps {
  index: number;
  chatItems: IChatItemProps[];
}

const Panel = ({ index, chatItems }: IPanelProps) => {
  const { selectedIndex } = useChatOverview();
  const isActive = selectedIndex === index;

  return (
    isActive && (
      <PanelWrapper>
        {chatItems.length === 0 ? (
          <EmptyTemplate type={"chat"}></EmptyTemplate>
        ) : (
          <ChatList chatItems={chatItems} />
        )}
      </PanelWrapper>
    )
  );
};

/* -------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------- */

export const ChatOverview: typeof ChatOverviewRoot & {
  List: typeof List;
  Trigger: typeof Trigger;
  Panel: typeof Panel;
} = Object.assign(ChatOverviewRoot, {
  List: List,
  Trigger: Trigger,
  Panel: Panel,
});
