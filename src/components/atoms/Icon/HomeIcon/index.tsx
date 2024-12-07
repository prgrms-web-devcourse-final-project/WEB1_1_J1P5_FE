import { type IIconProps, IconWrapper } from "../styled";

/**
 * Home 아이콘
 */
export const HomeIcon = ({ size = "m", color }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      {/* <FiHome /> */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill={color ? "#344FFF" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 11.7701C3.75 11.3083 3.98502 10.8751 4.38071 10.6075L14.1307 4.01396C14.6512 3.66201 15.3488 3.66201 15.8693 4.01397L25.6193 10.6075C26.015 10.8751 26.25 11.3083 26.25 11.7701V24.1103C26.25 25.292 25.2426 26.25 24 26.25H6C4.75736 26.25 3.75 25.292 3.75 24.1103V11.7701Z"
          stroke={color ? "#344FFF" : "#9B9FBC"}
          strokeWidth="1.40625"
        />
      </svg>
    </IconWrapper>
  );
};
