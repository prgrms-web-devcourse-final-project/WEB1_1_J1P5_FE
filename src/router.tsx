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
  PrivacyPolicyPage,
  ProfileRegistrationPage,
  SearchPage,
  SearchResultPage,
  SelectLocationPage,
  TermsOfServicePage,
  TransactionLocationPage,
  TransactionPage,
} from "pages";
import { AuthGuard, LoginGuard, RequiredGuard } from "pages/guards";
import { EmptyTemplate, RootLayout } from "components/templates";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <EmptyTemplate type={"error"} />,
    children: [
      // 권한 요청
      { path: "permission-request", element: <PermissionRequestPage /> },
      // 개인정보 처리방침
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      // 이용약관
      { path: "terms-of-service", element: <TermsOfServicePage /> },
      // 로그인
      {
        path: "login",
        element: (
          <LoginGuard>
            <LoginPage />
          </LoginGuard>
        ),
        children: [
          // OAuth callback 페이지
          { path: "callback/:provider", element: <OAuthCallbackPage /> },
        ],
      },
      // 필수로 입력받아야 하는 페이지들 (로그인 필수)
      {
        element: <RequiredGuard />,
        children: [
          // 프로필 등록/수정
          { path: "profile", element: <ProfileRegistrationPage /> },
          // 동네 선택
          {
            path: "neighborhood-selection",
            element: <NeighborhoodSelectionPage />,
          },
        ],
      },
      // 로그인 이후 프로필/동네 등록 이후 확인 가능한 페이지들 (로그인 필수 / 권한 필수)
      {
        element: <AuthGuard />,
        children: [
          // home
          { index: true, element: <HomePage /> },
          // 중고물품 등록/수정
          { path: "product", element: <PostRegisterPage /> },
          // 카테고리
          { path: "category", element: <CategoryPage /> },
          // 검색 히스토리
          { path: "search", element: <SearchPage /> },
          // 검색 결과
          { path: "search/keyword/:keyword", element: <SearchResultPage /> },
          // 검색 결과
          { path: "search/category/:category", element: <SearchResultPage /> },
          // 거래 장소 선택
          { path: "location-selection", element: <SelectLocationPage /> },
          // 상품 상세
          { path: "product/:productId", element: <DetailPage /> },
          // 거래 장소
          {
            path: "transaction-location",
            element: <TransactionLocationPage />,
          },
          // 마이페이지
          { path: "my-page", element: <MyPage /> },
          // 거래 내역 (구매내역)
          {
            path: "transaction/buy",
            element: <TransactionPage type={"buy"} />,
          },
          // 거래 내역 (판매내역)
          {
            path: "transaction/sell",
            element: <TransactionPage type={"sell"} />,
          },
          // 동네 인증
          { path: "neighborhood-auth", element: <NeighborhoodAuthPage /> },
          // 알림
          { path: "notification", element: <NotificationPage /> },
          // 차단
          { path: "blocked", element: <BlockedUsersPage /> },
          // 채팅방 목록
          { path: "chat", element: <ChatListPage /> },
          // 1:1 채팅
          { path: "chatroom/:roomId/:userId", element: <ChatRoomPage /> },
          // 시세 조회
          { path: "market-price", element: <MarketPricePage /> },
        ],
      },
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
