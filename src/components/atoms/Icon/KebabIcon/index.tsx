import { type IIconProps, IconWrapper } from "../styled";
import { FiMoreVertical } from "react-icons/fi";

/**
 * 케밥메뉴 아이콘
 */
export const KebabIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiMoreVertical />
    </IconWrapper>
  );
};
