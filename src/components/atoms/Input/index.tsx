import {
  type ChangeEvent,
  type MouseEvent,
  useCallback,
  useState
} from "react";

import { InputWrapper } from "./styled";

interface IInputProps {
  /** Input의 id */
  id?: string;
  /** Input의 name */
  name?: string;
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
  name,
  value,
  placeholder,
  setValue,
  onClick
}: IInputProps) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

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
    <InputWrapper focus={focus}>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onClick ? () => {} : handleInputChange}
        onClick={onClick && handleInputClick}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputWrapper>
  );
};
