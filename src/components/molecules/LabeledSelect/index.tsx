import { Label, Select } from "components/atoms";
import { LabeledSelectWrapper } from "./styled";
import type { ISelectOption } from "types";

interface ILabeledSelectProps {
  /** Label의 htmlFor 및 Select의 id */
  id?: string;
  /** Label에 들어갈 텍스트 */
  label: string;
  /** 현재 선택되어있는 값 */
  value: ISelectOption | undefined;
  /** 값 변경 시 함수 */
  onChange: (value: ISelectOption | undefined) => void;
  /** Select options */
  options: ISelectOption[];
  /** placeholder */
  placeholder?: string;
}

export const LabeledSelect = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder
}: ILabeledSelectProps) => (
  <LabeledSelectWrapper>
    <Label text={label} htmlFor={id}></Label>
    <Select
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      options={options}
    />
  </LabeledSelectWrapper>
);
