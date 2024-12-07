import { type IIconProps, IconWrapper } from "../styled";
import { FiMapPin } from "react-icons/fi";

/**
 * 장소(Map pin) 아이콘
 */
export const LocationIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiMapPin color="#9b9fBc" />
    </IconWrapper>
  );
};
