import type { HTMLAttributes, FC } from "react";
import { H1Wrapper, H5Wrapper, Body1Wrapper, ButtonWrapper } from "./style";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
  variant: "h1" | "h5" | "body1" | "button";
}

const variantMap: {
  [key in ITextProps["variant"]]: React.ComponentType<
    HTMLAttributes<HTMLParagraphElement>
  >;
} = {
  h1: H1Wrapper,
  h5: H5Wrapper,
  body1: Body1Wrapper,
  button: ButtonWrapper
};

export const Text: FC<ITextProps> = ({ children, variant }) => {
  const Component = variantMap[variant] || Body1Wrapper;
  return <Component>{children}</Component>;
};
