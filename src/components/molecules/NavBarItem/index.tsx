import { Text } from "components/atoms";
import type { IconType } from "types/icon";
import { NavBarItemWrapper } from "./styled";

export type NavBarItemType = "default" | "active";

interface INavBarItemProps {
  /** 현재 선택된 아이템인지 아닌지 구분 */
  type: NavBarItemType;
  /** 타이틀 */
  title: string;
  /** 아이콘 */
  icon: IconType;
  /** 클릭 이벤트 */
  onClick: () => void;
}

export const NavBarItem = ({
  type,
  title,
  icon,
  onClick,
}: INavBarItemProps) => {
  const IconComponent = icon;
  return (
    <NavBarItemWrapper type={type} onClick={onClick}>
      <IconComponent size="m" />
      <Text content={title} variant="button" />
    </NavBarItemWrapper>
  );
};
