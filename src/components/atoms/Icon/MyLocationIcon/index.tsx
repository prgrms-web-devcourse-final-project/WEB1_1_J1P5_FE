import { type IIconProps, IconWrapper } from "../styled";
import { FiCrosshair } from "react-icons/fi";

/**
 * 내 위치 아이콘
 */
export const MyLocationIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiCrosshair />
    </IconWrapper>
  );
};
