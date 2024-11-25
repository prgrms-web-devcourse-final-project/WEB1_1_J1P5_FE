import type { ChangeEvent, MouseEvent } from "react";
import { InputWrapper } from "./styled";

interface IInputProps {
  /** Input의 id */
  id?: string;
  /** Input의 value */
  value: string;
  /** placeholder */
  placeholder?: string;
  /** value set 함수 */
  setValue?: (value: string) => void;
  /** Input 클릭 시 수행할 액션 */
  onClick?: () => void;
}

/**
 * Input 컴포넌트
 */
export const Input = ({
  id,
  value,
  placeholder,
  setValue,
  onClick
}: IInputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };
  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    event.currentTarget.blur(); // Focusout
    onClick!();
  };
  return (
    <InputWrapper
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onClick ? () => {} : handleInputChange}
      onClick={onClick && handleInputClick}
    />
  );
};
