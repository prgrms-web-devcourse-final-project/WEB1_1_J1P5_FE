import { createBrowserRouter, type RouteObject } from "react-router-dom";
import {
  BlockedUsersPage,
  CategoryPage,
  ChatListPage,
  ChatRoomPage,
  DetailPage,
  HomePage,
  LoginPage,
  MarketPricePage,
  MyPage,
  NeighborhoodAuthPage,
  NeighborhoodSelectionPage,
  NotificationPage,
  OAuthCallbackPage,
  PermissionRequestPage,
  PostRegisterPage,
  ProfileRegistrationPage,
  SearchPage,
  SearchResultPage,
  SelectLocationPage,
  TransactionLocationPage,
  TransactionPage,
} from "pages";
import { RootLayout } from "components/templates";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <>404</>,
    children: [
      // home
      { index: true, element: <HomePage /> },
      // 권한 요청
      { path: "permission-request", element: <PermissionRequestPage /> },
      // 로그인
      {
        path: "login",
        element: <LoginPage />,
        children: [
          // OAuth callback 페이지
          { path: "callback/:provider", element: <OAuthCallbackPage /> },
        ],
      },
      // 프로필 등록/수정
      { path: "profile", element: <ProfileRegistrationPage /> },
      // 중고물품 등록/수정
      { path: "product", element: <PostRegisterPage /> },
      // 동네 선택
      {
        path: "neighborhood-selection",
        element: <NeighborhoodSelectionPage />,
      },
      // 카테고리
      { path: "category", element: <CategoryPage /> },
      // 검색 히스토리
      { path: "search", element: <SearchPage /> },
      // 검색 결과
      { path: "search/keyword/:query", element: <SearchResultPage /> },
      // 검색 결과
      { path: "search/category/:query", element: <SearchResultPage /> },
      // 거래 장소 선택
      { path: "location-selection", element: <SelectLocationPage /> },
      // 상품 상세
      { path: "product/:productId", element: <DetailPage /> },
      // 거래 장소
      { path: "transaction-location", element: <TransactionLocationPage /> },
      // 마이페이지
      { path: "my-page", element: <MyPage /> },
      // 거래 내역
      { path: "transaction", element: <TransactionPage /> },
      // 동네 인증
      { path: "neighborhood-auth", element: <NeighborhoodAuthPage /> },
      // 알림
      { path: "notification", element: <NotificationPage /> },
      // 차단
      { path: "blocked", element: <BlockedUsersPage /> },
      // 채팅방 목록
      { path: "chat", element: <ChatListPage /> },
      // 1:1 채팅
      { path: "chat/:roomId", element: <ChatRoomPage /> },
      // 시세 조회
      { path: "market-price", element: <MarketPricePage /> },
    ],
  },
];

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
