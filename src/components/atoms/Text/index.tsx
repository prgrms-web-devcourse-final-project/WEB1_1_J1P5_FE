import type { HTMLAttributes, FC } from "react";
import { H1Wrapper, H5Wrapper, Body1Wrapper, ButtonWrapper } from "./styled";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  content: string;
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
  button: ButtonWrapper
};

export const Text: FC<ITextProps> = ({ content, variant = "body1" }) => {
  const Component = variantMap[variant];
  return <Component>{content}</Component>;
};
