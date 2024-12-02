import { type IIconProps, IconWrapper } from "../styled";
import { NoIconWrapper } from "./styled";

/**
 * 비어있는 아이콘
 */
export const NoIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <NoIconWrapper size={size} />
    </IconWrapper>
  );
};
