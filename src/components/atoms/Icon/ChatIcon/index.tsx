import { type IIconProps, IconWrapper } from "../styled";
import { FiMessageSquare } from "react-icons/fi";

/**
 * 채팅 아이콘
 */
export const ChatIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiMessageSquare />
    </IconWrapper>
  );
};
