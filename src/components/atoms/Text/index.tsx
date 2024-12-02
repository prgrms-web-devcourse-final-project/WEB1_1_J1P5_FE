import type { HTMLAttributes } from "react";
import { H1Wrapper, H5Wrapper, Body1Wrapper, ButtonWrapper } from "./styled";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Text에 들어가는 내용 */
  content: string;
  /** Text의 타입 (스타일 가이드 준수) */
  variant?: "h1" | "h5" | "body1" | "button";
}

const variantMap: {
  [key in NonNullable<ITextProps["variant"]>]: React.ComponentType<
    HTMLAttributes<HTMLParagraphElement>
  >;
} = {
  h1: H1Wrapper,
  h5: H5Wrapper,
  body1: Body1Wrapper,
  button: ButtonWrapper,
};

export const Text = ({
  content,
  variant = "body1",
  onClick = () => {},
}: ITextProps) => {
  const Component = variantMap[variant];
  return <Component onClick={onClick}>{content}</Component>;
};
