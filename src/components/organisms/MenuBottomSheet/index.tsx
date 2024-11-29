import type { ComponentProps } from "react";
import { TextButton } from "components/atoms";
import { ModalBottomSheet } from "components/molecules";
import type { IMenu } from "types";
import { MenuBottomSheetWrapper } from "./styled";

interface IMenuBottomSheetProps
  extends ComponentProps<typeof ModalBottomSheet> {
  /** 메뉴 목록 */
  menus: IMenu[];
}

export const MenuBottomSheet = ({
  open,
  onClose,
  menus,
}: IMenuBottomSheetProps) => {
  return (
    <MenuBottomSheetWrapper open={open} onClose={onClose}>
      {menus.map(({ content, onClick }, idx) => (
        <TextButton
          key={`bottom_menu_${idx}`}
          text={content}
          onClick={onClick}
          backgroundColor="transparent"
          size="l"
        />
      ))}
    </MenuBottomSheetWrapper>
  );
};
