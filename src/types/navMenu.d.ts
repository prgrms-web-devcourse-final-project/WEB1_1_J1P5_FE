import type { IconType } from "./icon";

/**
 * 아이콘이 있는 메뉴 타입
 */
export interface INavMenu {
  icon: IconType;
  name: string;
  pathname: string;
}
