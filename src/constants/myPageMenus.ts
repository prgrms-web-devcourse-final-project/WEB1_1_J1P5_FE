import {
  BanIcon,
  BuyIcon,
  MyLocationIcon,
  PlusIcon,
  SearchIcon,
  // NotificationIcon,
  SellIcon,
} from "components/atoms/Icon";
import type { INavMenu } from "types";

interface IMyMenu extends INavMenu {
  desc: string; // description
}

interface IMyPageMenus {
  title: string; // 대제목
  menus: IMyMenu[]; // 하위 메뉴 목록
}

/**
 * MyPage에서 사용되는 메뉴 목록
 */
export const MY_PAGE_MENUS: IMyPageMenus[] = [
  {
    title: "나의 거래",
    menus: [
      {
        icon: SellIcon,
        name: "판매 내역",
        desc: "판매 내역을 한눈에 모아보세요!",
        pathname: "/transaction/sell",
      },
      {
        icon: BuyIcon,
        name: "입찰 내역",
        desc: "입찰하셨던 기록을 확인해보세요!",
        pathname: "/transaction/buy",
      },
    ],
  },
  {
    title: "기타",
    menus: [
      {
        icon: MyLocationIcon,
        name: "동네 인증",
        desc: "동네 인증을 하면 거래를 할 수 있어요!",
        pathname: "/neighborhood-auth",
      },
      // { icon: NotificationIcon, name: "알림", pathname: "/notification" },
      { icon: BanIcon,
        name: "차단 사용자 관리", 
        desc: "차단 사용자를 관리할 수 있어요.",
        pathname: "/blocked"
      },
      {
        icon: PlusIcon,
        name: "이용약관",
        desc: "서비스 이용약관입니다.",
        pathname: "/terms-of-service",
      },
      {
        icon: SearchIcon,
        name: "개인정보 처리방침",
        desc: "개인정보 처리방침 안내 페이지입니다.",
        pathname: "/privacy-policy",
      },
    ],
  },
];
