import { Label, Input } from "components/atoms";
import { LabeledInputWrapper } from "./styled";

interface ILabeledInputProps {
  /** Label와 Input의 htmlFor */
  id: string;
  /** Label에 들어갈 텍스트 */
  label: string;
  /** value set 함수 */
  value: string;
  /** placeholder */
  placeholder?: string;
  /** value set 함수 */
  setValue?: (value: string) => void;
  /** Input 클릭 시 수행할 액션 */
  onClick?: () => void;
}

export const LabeledInput = ({
  id,
  label,
  value,
  placeholder,
  setValue,
  onClick
}: ILabeledInputProps) => (
  <LabeledInputWrapper>
    <Label text={label} htmlFor={id}></Label>
    <Input
      id={id}
      placeholder={placeholder}
      value={value}
      setValue={setValue}
      onClick={onClick}
    />
  </LabeledInputWrapper>
);

