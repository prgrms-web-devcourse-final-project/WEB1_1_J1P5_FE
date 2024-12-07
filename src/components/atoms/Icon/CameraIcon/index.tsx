import { type IIconProps, IconWrapper } from "../styled";

/**
 * 카메라 아이콘 (이미지 업로드 시 사용)
 */
export const CameraIcon = ({ size = "m" }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 41 40"
        fill="none"
      >
        <g clipPath="url(#clip0_1182_282)">
          <path
            d="M4.94452 5.55557C4.94452 5.55557 4.94452 4.44446 6.05563 4.44446H12.7223C12.7223 4.44446 13.8334 4.44446 13.8334 5.55557V7.77779H4.94452V5.55557Z"
            fill="#66757F"
          />
          <path
            d="M0.500061 11.1111C0.500061 11.1111 0.500061 6.66666 4.94451 6.66666H36.0556C36.0556 6.66666 40.5001 6.66666 40.5001 11.1111V31.1111C40.5001 31.1111 40.5001 35.5555 36.0556 35.5555H4.94451C4.94451 35.5555 0.500061 35.5555 0.500061 31.1111V11.1111Z"
            fill="#31373D"
          />
          <path
            d="M23.8334 32.2222C29.9699 32.2222 34.9445 27.2476 34.9445 21.1111C34.9445 14.9746 29.9699 10 23.8334 10C17.6969 10 12.7223 14.9746 12.7223 21.1111C12.7223 27.2476 17.6969 32.2222 23.8334 32.2222Z"
            fill="#CCD6DD"
          />
          <path
            d="M23.8334 30C28.7426 30 32.7223 26.0203 32.7223 21.1111C32.7223 16.2019 28.7426 12.2222 23.8334 12.2222C18.9242 12.2222 14.9445 16.2019 14.9445 21.1111C14.9445 26.0203 18.9242 30 23.8334 30Z"
            fill="#31373D"
          />
          <path
            d="M23.8334 26.6667C26.9016 26.6667 29.3889 24.1793 29.3889 21.1111C29.3889 18.0428 26.9016 15.5555 23.8334 15.5555C20.7651 15.5555 18.2778 18.0428 18.2778 21.1111C18.2778 24.1793 20.7651 26.6667 23.8334 26.6667Z"
            fill="#3B88C3"
          />
          <path
            d="M36.6112 12.2222C37.5317 12.2222 38.2779 11.476 38.2779 10.5556C38.2779 9.63508 37.5317 8.88889 36.6112 8.88889C35.6907 8.88889 34.9445 9.63508 34.9445 10.5556C34.9445 11.476 35.6907 12.2222 36.6112 12.2222Z"
            fill="white"
          />
          <path
            d="M13.8334 10.5556C13.8334 11.4767 13.0879 12.2222 12.1667 12.2222H6.61119C5.69007 12.2222 4.94452 11.4767 4.94452 10.5556C4.94452 9.63444 5.69007 8.88889 6.61119 8.88889H12.1667C13.0879 8.88889 13.8334 9.63444 13.8334 10.5556Z"
            fill="#F5F8FA"
          />
        </g>
        <defs>
          <clipPath id="clip0_1182_282">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconWrapper>
  );
};

