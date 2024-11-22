import { type IIconProps, IconWrapper } from "../styled";
import { FiUser } from "react-icons/fi";

/**
 * 마이페이지 아이콘
 */
export const MyPageIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiUser />
    </IconWrapper>
  );
};
