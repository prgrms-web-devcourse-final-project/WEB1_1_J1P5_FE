import { type IIconProps, IconWrapper } from "../styled";
import { FiSearch } from "react-icons/fi";

/**
 * 검색 아이콘
 */
export const SearchIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <FiSearch />
    </IconWrapper>
  );
};
