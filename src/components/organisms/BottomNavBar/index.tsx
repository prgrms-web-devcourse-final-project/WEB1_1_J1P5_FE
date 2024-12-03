import { useLocation, useNavigate } from "react-router-dom";
import { NavBarItem } from "components/molecules";
import { BOTTOM_NAV_ITEMS } from "constants/bottomNavItems";
import { BottomNavBarWrapper } from "./styled";

export const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 URL 경로 가져오기
  const isActive = (path: string) => location.pathname === path;

  const handleNavBarItemClick = (path: string) => {
    console.log(`${path} 로 이동`);
    navigate(path);
  };

  return (
    <BottomNavBarWrapper>
      {BOTTOM_NAV_ITEMS.map(({ path, title, icon }) => (
        <NavBarItem
          key={`bottom_nav_bar_${path}`}
          state={isActive(path) ? "active" : "default"}
          title={title}
          icon={icon}
          onClick={() => handleNavBarItemClick(path)}
        />
      ))}
    </BottomNavBarWrapper>
  );
};
