import { TabMenuWrapper } from "./styled";
import { TabItem } from "../TabItem";
import { useState } from "react";

interface ITabMenuProps {
  /** TabItem 리스트 */
  menus: string[];
  /** TabItem 클릭 이벤트  */
  onClick: (tab: string) => void;
}

export const TabMenu = ({ menus, onClick }: ITabMenuProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleTabMenu = (idx: number) => {
    onClick(menus[idx]);
    setCurrentIdx(idx);
  };
  return (
    <TabMenuWrapper>
      {menus.map((title, idx) => {
        return (
          <TabItem
            key={idx}
            state={currentIdx === idx ? "active" : "default"}
            title={title}
            onClick={() => handleTabMenu(idx)}
          ></TabItem>
        );
      })}
    </TabMenuWrapper>
  );
};
