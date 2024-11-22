import type { HTMLAttributes, FC } from "react";
import { StyledH1, StyledH5, StyledBody1, StyledButton } from "./style";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
  variant: "h1" | "h5" | "body1" | "button";
}

const variantMap: {
  [key in ITextProps["variant"]]: React.ComponentType<
    HTMLAttributes<HTMLParagraphElement>
  >;
} = {
  h1: StyledH1,
  h5: StyledH5,
  body1: StyledBody1,
  button: StyledButton
};

export const Text: FC<ITextProps> = ({ children, variant }) => {
  const Component = variantMap[variant] || StyledBody1;
  return <Component>{children}</Component>;
};

export default Text;

