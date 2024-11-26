import { NavBarItem } from "components/molecules/NavBarItem";
import { BottomNavBarWrapper } from "./styled";
import { BuyIcon } from "components/atoms/Icon";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 URL 경로 가져오기
  const buyIcon = BuyIcon;
  const isActive = (path: string) => location.pathname === path;

  const handleHome = () => {
    console.log("/ 로 이동");
    navigate("/");
  };
  const handleHistory = () => {
    console.log("/history 로 이동");
    navigate("/history");
  };
  const handleChat = () => {
    console.log("/chat 로 이동");
    navigate("/chat");
  };
  const handleMyPage = () => {
    console.log("/my-page 로 이동");
    navigate("/my-page");
  };
  return (
    <BottomNavBarWrapper>
      <NavBarItem
        state={isActive("/") ? "active" : "default"} // 조건에 따라 "active" 설정
        title={"홈"}
        icon={buyIcon}
        onClick={handleHome}
      ></NavBarItem>
      <NavBarItem
        state={isActive("/history") ? "active" : "default"}
        title={"시세조회"}
        icon={buyIcon}
        onClick={handleHistory}
      ></NavBarItem>
      <NavBarItem
        state={isActive("/chat") ? "active" : "default"}
        title={"채팅"}
        icon={buyIcon}
        onClick={handleChat}
      ></NavBarItem>
      <NavBarItem
        state={isActive("/my-page") ? "active" : "default"}
        title={"My"}
        icon={buyIcon}
        onClick={handleMyPage}
      ></NavBarItem>
    </BottomNavBarWrapper>
  );
};
