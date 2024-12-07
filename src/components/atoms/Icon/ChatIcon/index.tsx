import { type IIconProps, IconWrapper } from "../styled";

/**
 * 채팅 아이콘
 */
export const ChatIcon = ({ size = "m", color }: IIconProps) => {
  return (
    <IconWrapper size={size}>
      {/* fill 옵션만 줘서 1개로 사용하고 싶었는데 svg 형태 자체가 좋은 형태가 아니라서 fill 준 경우 이상하게 나와 svg 2개 사용했습니다. */}
      {color ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2923 19.5445C25.9067 18.1547 26.2479 16.6172 26.2479 15C26.2479 8.7868 21.2115 3.75 14.9989 3.75C8.78632 3.75 3.75 8.7868 3.75 15C3.75 21.2132 8.78632 26.25 14.9989 26.25C16.9991 26.25 18.8774 25.7279 20.5049 24.8125L26.25 26.2489L25.2923 19.5445Z"
            fill="#344FFF"
          />
          <path
            d="M9.37447 15.1057V15M14.9989 15.1057V15M20.6234 15.1057V15M26.2479 15C26.2479 16.6172 25.9067 18.1547 25.2923 19.5445L26.25 26.2489L20.5049 24.8125C18.8774 25.7279 16.9991 26.25 14.9989 26.25C8.78632 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.78632 3.75 14.9989 3.75C21.2115 3.75 26.2479 8.7868 26.2479 15Z"
            stroke="#344FFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.37451 15.1057V15M14.999 15.1057V15M20.6234 15.1057V15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.37447 15.1057V15M14.9989 15.1057V15M20.6234 15.1057V15M26.2479 15C26.2479 16.6172 25.9067 18.1547 25.2923 19.5445L26.25 26.2489L20.5049 24.8125C18.8774 25.7279 16.9991 26.25 14.9989 26.25C8.78632 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.78632 3.75 14.9989 3.75C21.2115 3.75 26.2479 8.7868 26.2479 15Z"
            stroke="#9B9FBC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* <FiMessageSquare /> */}
    </IconWrapper>
  );
};
