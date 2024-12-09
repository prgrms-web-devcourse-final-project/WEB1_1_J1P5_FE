import { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header, BottomNavBar, TopBar } from "components/organisms";
import { useHeaderStore, useTopBarStore } from "stores";
import { PageLayoutWrapper, RootLayoutWrapper } from "./styled";

export const RootLayout = () => {
  const navigate = useNavigate();
  const { pathname: _pathname } = useLocation();
  const { title: headerTitle } = useHeaderStore();
  const {
    title: topBarTitle,
    icon,
    onBackClick,
    onRightClick,
    setValue,
    onSearch,
    value,
    placeholder,
    setBackClick,
  } = useTopBarStore();
  /**
   * 현재 페이지 체크 시 사용되는 pathname
   * 첫 번째 path만 사용
   */
  const pathname = useMemo(() => `/${_pathname.split("/")[1]}`, [_pathname]);

  /**
   * 알림
   */
  const handleNotificationButtonClick = () => {
    navigate("/notification");
  };
  /**
   * 검색
   */
  const handleSearchButtonClick = () => {
    navigate("/search");
  };
  /**
   * 동네 선택
   */
  const handleLocationButtonClick = () => {
    navigate("/neighborhood-selection");
  };
  /**
   * 뒤로가기
   */
  const handleBackButtonClick = () => {
    // const productRegex = /^\/product\/\d+$/; // "/product/"로 시작하고 숫자가 오는 형식
    // if (productRegex.test(_pathname)) {
    //   navigate("/");
    // } else {
    // navigate(-1);
    // }
    navigate(-1);
  };

  /** backIcon 클릭 기본 함수 지정 */
  useEffect(() => {
    setBackClick(handleBackButtonClick);
    // }, [handleBackButtonClick]);
  }, []);

  return (
    <RootLayoutWrapper>
      {["/", "/market-price", "/chat", "/my-page"].includes(pathname) && (
        <Header
          type={pathname === "/" ? "home" : "default"}
          title={headerTitle}
          onNotificationClick={handleNotificationButtonClick}
          onSearchClick={handleSearchButtonClick}
          onLocationClick={handleLocationButtonClick}
        />
      )}
      {![
        "/",
        "/market-price",
        "/my-page",
        "/login",
        "/permission-request",
        "/chat",
      ].includes(pathname) && (
        <TopBar>
          <TopBar.BackIcon onBackIconClick={onBackClick} />
          {!["/search", "/neighborhood-selection"].includes(pathname) && (
            <TopBar.Title title={topBarTitle} />
          )}
          {["/search", "/neighborhood-selection"].includes(pathname) && (
            <TopBar.Input
              value={value}
              setValue={setValue}
              placeholder={placeholder}
              onEnter={onSearch}
            />
          )}
          <TopBar.Icon icon={icon} onIconClick={onRightClick} />
        </TopBar>
      )}
      <PageLayoutWrapper>
        <Outlet />
      </PageLayoutWrapper>
      {["/", "/market-price", "/chat", "/my-page"].includes(pathname) && (
        <BottomNavBar />
      )}
    </RootLayoutWrapper>
  );
};
