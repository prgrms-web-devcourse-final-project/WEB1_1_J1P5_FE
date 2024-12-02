import { IconType } from "types/icon";
import { IconButtonWrapper } from "./styled";
export interface IIconButtonProps {
  /** 아이콘 컴포넌트 : atoms/Icon 경로 참조 */
  icon: IconType;
  /** 타입 : 테두리 둥근 정도, default는 square */
  type?: "round" | "square";
  /** 사이즈 : 아이콘 사이즈  default는 m */
  size?: "s" | "m" | "l";
  /** 배경 색깔 : default는 임의로 선정(=#D9D9D9, 이후 수정 바람) */
  backgroundColor?: "default" | "transparent";
  /** onClick 이벤트, 상위 컴포넌트 개발할 때 수정 요망 */
  onClick?: () => void;
}
export const IconButton = ({
  icon,
  type = "square",
  size = "m",
  backgroundColor = "default",
  onClick = () => {}
}: IIconButtonProps) => {
  const IconComponent = icon;

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <IconButtonWrapper
      shape={type}
      backgroundColor={backgroundColor}
      onClick={handleOnClick}
    >
      <IconComponent size={size}></IconComponent>
    </IconButtonWrapper>
  );
};
