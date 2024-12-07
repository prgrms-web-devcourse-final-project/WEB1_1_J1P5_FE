import { type IIconProps, IconWrapper } from "../styled";

/**
 * 시세조회 아이콘
 */
export const MarketPriceIcon = ({ size = "m", color }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      {/* <FiDollarSign /> */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill={color ? "#344FFF" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.749 4.97103C14.2537 3.73914 16.1774 3 18.2738 3C23.0937 3 27.0011 6.90733 27.0011 11.7273C27.0011 13.8227 26.2626 15.7456 25.0317 17.25M20.4536 18.2727C20.4536 23.0927 16.5462 27 11.7263 27C6.90636 27 2.99902 23.0927 2.99902 18.2727C2.99902 13.4528 6.90636 9.54545 11.7263 9.54545C16.5462 9.54545 20.4536 13.4528 20.4536 18.2727Z"
          stroke={color ? "#344FFF" : "#9B9FBC"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};
