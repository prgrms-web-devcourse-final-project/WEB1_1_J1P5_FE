import {
  ChatIcon,
  HomeIcon,
  MarketPriceIcon,
  MyPageIcon,
} from "components/atoms/Icon";

export const BOTTOM_NAV_ITEMS = [
  { title: "홈", path: "/", icon: HomeIcon },
  { title: "시세조회", path: "/market-price", icon: MarketPriceIcon },
  { title: "채팅", path: "/chat", icon: ChatIcon },
  { title: "My", path: "/my-page", icon: MyPageIcon },
] as const;
