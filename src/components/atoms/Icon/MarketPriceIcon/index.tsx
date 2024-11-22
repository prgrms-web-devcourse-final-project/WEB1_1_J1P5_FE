import { type IIconProps, IconWrapper } from "../styled";
import { FiDollarSign } from "react-icons/fi";

/**
 * 시세조회 아이콘
 */
export const MarketPriceIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiDollarSign />
    </IconWrapper>
  );
};
