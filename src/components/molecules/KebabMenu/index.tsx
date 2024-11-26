import { TextButton } from "components/atoms";
import { KebabMenuWrapper } from "./styled";

export interface IMenu {
  /** 메뉴 이름 */
  content: string;
  /** 메뉴 아이템 클릭시 일어나는 이벤트 */
  onClick: () => void;
}
interface IKebabMenuProps {
  /** 케밥 메뉴 리스트 */
  menus: IMenu[];
}

export const KebabMenu = ({ menus }: IKebabMenuProps) => {
  return (
    <KebabMenuWrapper>
      {menus.map((menu, idx) => {
        return (
          <TextButton
            key={idx}
            text={menu.content}
            size="s"
            onClick={menu.onClick}
          ></TextButton>
        );
      })}
    </KebabMenuWrapper>
  );
};
