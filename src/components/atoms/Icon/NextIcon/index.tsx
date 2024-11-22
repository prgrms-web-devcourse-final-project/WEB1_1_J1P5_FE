import { FaArrowRight } from "react-icons/fa6";
import { type IIconProps, IconWrapper } from "../styled";

/**
 * 앞으로가기 아이콘
 */
export const NextIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FaArrowRight />
    </IconWrapper>
  );
};
