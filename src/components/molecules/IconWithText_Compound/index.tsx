import { IconType } from "types/icon";
import { IconWithTextContentWrapper, IconWithTextWrapper } from "./styled";
import { Text } from "components/atoms";

// IconWithText 기본 컴포넌트
export interface IIconWithTextProps {
  children?: React.ReactNode;
}

export const IconWithText = ({ children }: IIconWithTextProps) => {
  return <IconWithTextWrapper>{children}</IconWithTextWrapper>;
};

// Content 컴포넌트
export interface IIconWithTextContentProps {
  /** Text 내용 */
  content: string;
  /** 부가설명 내용(권한 설정 화면) */
  desc?: string;
}

IconWithText.Content = function IconWithTextContent({
  content,
  desc,
}: IIconWithTextContentProps) {
  return (
    <IconWithTextContentWrapper content={content}>
      <Text content={content} variant={"body1"}></Text>
      {desc && <Text content={desc} variant={"button"}></Text>}
    </IconWithTextContentWrapper>
  );
};

// Icon 컴포넌트
export interface IIconWithTextIconProps {
  /** 아이콘 컴포넌트 : atoms/Icon 경로 참조 */
  icon: IconType;
  /** 아이콘 사이즈 : s / m / l */
  size?: "s" | "m" | "l";
}

IconWithText.Icon = function IconWithTextIcon({
  icon,
  size = "m",
}: IIconWithTextIconProps) {
  const IconComponent = icon;
  return <IconComponent size={size} />;
};
