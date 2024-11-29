import { TextButton } from "components/atoms";
import { KebabMenuWrapper } from "./styled";
import type { IMenu } from "types";

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
