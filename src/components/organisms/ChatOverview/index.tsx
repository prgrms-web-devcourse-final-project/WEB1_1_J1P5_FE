import {} from "components/atoms";
import { TabItem } from "components/molecules";
import { ChatList } from "components/organisms";
import { ChatOverviewRootWrapper, ListWrapper, PanelWrapper } from "./styled";
import { type Context, createContext, useContext, useState } from "react";

import { IChatItemProps } from "components/organisms/ChatItem";

interface IChatOverviewRootProps {
  children: React.ReactNode;
}

interface IChatOverviewContextProps {
  /** 선택된 인덱스 */
  selectedIndex: number;
  /** 선택된 인덱스 변경 함수 */
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
}

const ChatOverviewContext: Context<IChatOverviewContextProps> =
  createContext<IChatOverviewContextProps>({
    selectedIndex: 0,
    setSelectedIndex: undefined,
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

const ChatOverviewRoot = ({ children }: IChatOverviewRootProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const providerValue = { selectedIndex, setSelectedIndex };

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
  title: string;
}

const Trigger = ({ index, title }: ITriggerProps) => {
  const { selectedIndex, setSelectedIndex } = useChatOverview();
  const isActive = selectedIndex === index ? "active" : "default";

  const onSelect = () => {
    if (setSelectedIndex) {
      setSelectedIndex(index);
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
        <ChatList chatItems={chatItems} />
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
