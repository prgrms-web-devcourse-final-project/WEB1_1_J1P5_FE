import { Label, Textarea } from "components/atoms";
import { LabeledTextareaWrapper } from "./styled";

interface ILabeledTextareatProps {
  /** Label의 htmlFor 및 Input의 id */
  id: string;
  /** Label에 들어갈 텍스트 */
  label: string;
  /** value set 함수 */
  value: string;
  /** placeholder */
  placeholder?: string;
  /** value set 함수 */
  setValue?: (value: string) => void;
}

export const LabeledTextarea = ({
  id,
  label,
  value,
  placeholder,
  setValue
}: ILabeledTextareatProps) => (
  <LabeledTextareaWrapper>
    <Label text={label} htmlFor={id}></Label>
    <Textarea
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
    />
  </LabeledTextareaWrapper>
);
