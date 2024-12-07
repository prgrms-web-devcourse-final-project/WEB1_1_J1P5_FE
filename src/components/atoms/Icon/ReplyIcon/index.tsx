import { type IIconProps, IconWrapper } from "../styled";

/**
 * 답글 아이콘
 */
export const ReplyIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.086 19.8L20.4 14.4859M20.4 14.4859L15.086 9.17193M20.4 14.4859H7.60003C5.39089 14.4859 3.60003 12.6951 3.60003 10.4859V4.19995"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};
