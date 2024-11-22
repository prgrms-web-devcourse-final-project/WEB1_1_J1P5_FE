import { LOGO_PATH } from "constants/imgPath";
import { LogoWrapper } from "./styled";

export const Logo = () => {
  return <LogoWrapper src={LOGO_PATH} alt="로고_이미지"></LogoWrapper>;
};
