import { IconType } from "types/icon";
import { IconWithTextContentWrapper, IconWithTextWrapper } from "./styled";
import { Text } from "components/atoms";
import { TextVariant } from "components/atoms/Text";

// IconWithText 기본 컴포넌트
export interface IIconWithTextProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const IconWithTextRoot = ({
  children,
  onClick = () => {},
}: IIconWithTextProps) => {
  return (
    <IconWithTextWrapper onClick={onClick}>{children}</IconWithTextWrapper>
  );
};

// Content 컴포넌트
export interface IIconWithTextContentProps {
  /** Text 내용 */
  content: string;
  /** 부가설명 내용(권한 설정 화면) */
  desc?: string;
  /** content의 Text variant 타입 */
  contentVariant?: TextVariant;
  /** 부가설명의 Text variant 타입 */
  descVariant?: TextVariant;
}

const Content = ({
  content,
  desc,
  contentVariant,
  descVariant,
}: IIconWithTextContentProps) => {
  return (
    <IconWithTextContentWrapper content={content}>
      <Text content={content} variant={contentVariant || "body1"}></Text>
      {desc && <Text content={desc} variant={descVariant || "button"}></Text>}
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

const Icon = ({ icon, size = "m" }: IIconWithTextIconProps) => {
  const IconComponent = icon;
  return <IconComponent size={size} />;
};

export const IconWithText: typeof IconWithTextRoot & {
  Icon: typeof Icon;
  Content: typeof Content;
} = Object.assign(IconWithTextRoot, {
  Icon,
  Content,
});
