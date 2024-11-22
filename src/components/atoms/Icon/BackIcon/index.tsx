import { FaArrowLeft } from "react-icons/fa6";
import { type IIconProps, IconWrapper } from "../styled";

/**
 * 뒤로가기 아이콘
 */
export const BackIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FaArrowLeft />
    </IconWrapper>
  );
};
