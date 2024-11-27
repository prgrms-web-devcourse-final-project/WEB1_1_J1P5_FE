import {
  BanIcon,
  BuyIcon,
  MyLocationIcon,
  NotificationIcon,
  SellIcon,
} from "components/atoms/Icon";
import type { INavMenu } from "types";

interface IMyPageMenus {
  title: string; // 대제목
  menus: INavMenu[]; // 하위 메뉴 목록
}

/**
 * MyPage에서 사용되는 메뉴 목록
 */
export const MY_PAGE_MENUS: IMyPageMenus[] = [
  {
    title: "나의 거래",
    menus: [
      { icon: SellIcon, name: "판매 내역", pathname: "/sell" },
      { icon: BuyIcon, name: "입찰 내역", pathname: "/buy" },
    ],
  },
  {
    title: "기타",
    menus: [
      { icon: MyLocationIcon, name: "동네 인증", pathname: "/my-location" },
      { icon: NotificationIcon, name: "알림", pathname: "/notification" },
      { icon: BanIcon, name: "차단 사용자 관리", pathname: "/ban" },
    ],
  },
];
