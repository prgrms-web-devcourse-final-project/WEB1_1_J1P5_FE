import { type IIconProps, IconWrapper } from "../styled";
import { FiX } from "react-icons/fi";

/**
 * X 아이콘
 */
export const XIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiX />
    </IconWrapper>
  );
};
