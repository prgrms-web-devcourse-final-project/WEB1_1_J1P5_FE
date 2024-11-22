import { type IIconProps, IconWrapper } from "../styled";
import { FiShoppingBag } from "react-icons/fi";

/**
 * 구매 아이콘
 */
export const BuyIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiShoppingBag />
    </IconWrapper>
  );
};
