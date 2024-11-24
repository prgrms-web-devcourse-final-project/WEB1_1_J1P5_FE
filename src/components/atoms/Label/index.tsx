import { LabelWrapper } from "./styled";

interface ILabelProps {
  /** Label에 들어갈 텍스트 */
  text: string;
}

export const Label = ({ text }: ILabelProps) => {
  return <LabelWrapper>{text}</LabelWrapper>;
};
