import { type IIconProps, IconWrapper } from "../styled";
import { FiHome } from "react-icons/fi";

/**
 * Home 아이콘
 */
export const HomeIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiHome />
    </IconWrapper>
  );
};
