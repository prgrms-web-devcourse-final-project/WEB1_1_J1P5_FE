import { LabelWrapper } from "./styled";

interface ILabelProps {
  /** Input or Select의 id를 연결하기 위한 htmlFor */
  htmlFor?: string;
  /** Label에 들어갈 텍스트 */
  text: string;
}

export const Label = ({ text, htmlFor }: ILabelProps) => {
  return <LabelWrapper htmlFor={htmlFor}>{text}</LabelWrapper>;
};
