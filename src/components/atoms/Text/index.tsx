import type { HTMLAttributes } from "react";
import {
  H1Wrapper,
  H5Wrapper,
  Body1Wrapper,
  ButtonWrapper,
  TitleBoldWrapper,
  DescRegularWrapper,
  DescBoldWrapper,
  ExplainRegularWrapper,
  ExplainBoldWrapper,
  TagRegularWrapper,
  WritingBoldWrapper,
  ButtonBoldWrapper,
} from "./styled";

export type TextVariant =
  | "h1"
  | "h5"
  | "body1"
  | "button"
  | "title_bold"
  | "desc_regular"
  | "desc_bold"
  | "explan_regular"
  | "explan_bold"
  | "tag_regular"
  | "writing_bold"
  | "btn_bold";

interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Text에 들어가는 내용 */
  content: string;
  /** Text의 타입 (스타일 가이드 준수) */
  variant?: TextVariant;
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
  title_bold: TitleBoldWrapper,
  desc_regular: DescRegularWrapper,
  desc_bold: DescBoldWrapper,
  explan_regular: ExplainRegularWrapper,
  explan_bold: ExplainBoldWrapper,
  tag_regular: TagRegularWrapper,
  writing_bold: WritingBoldWrapper,
  btn_bold: ButtonBoldWrapper,
};

export const Text = ({
  content,
  variant = "body1",
  onClick = () => {},
}: ITextProps) => {
  const Component = variantMap[variant];
  return <Component onClick={onClick}>{content}</Component>;
};
