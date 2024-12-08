import {
  type ChangeEvent,
  type MouseEvent,
  useCallback,
  useState
} from "react";

import { InputWrapper } from "./styled";

interface IInputProps {
  /** Input의 type */
  type?: "text" | "number";
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
  /** Input Enter 눌렀을때 수행할 액션 */
  onKeyDown?: () => void;
}

/**
 * Input 컴포넌트
 */
export const Input = ({
  type = "text",
  id,
  name,
  value,
  placeholder,
  setValue,
  onClick,
  onKeyDown
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
      let value = event.target.value;
      if (type === "number") {
        const numCheck = /^[0-9,]/.test(value);
        if (!numCheck && value) return;

        if (numCheck) {
          const numValue = value.split(",").join("");
          value = Number(numValue).toLocaleString();
        }
        setValue(value);
      } else {
        setValue(value);
      }
    }
  };

  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    event.currentTarget.blur(); // Focusout
    onClick!();
  };

  // 엔터 키로 메시지 전송
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (onKeyDown) {
        onKeyDown();
      }
      return;
    }
  };

  return (
    <InputWrapper focus={focus}>
      {type === "number" && <p>₩</p>}
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onClick ? () => {} : handleInputChange}
        onClick={onClick && handleInputClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyPress}
      />
    </InputWrapper>
  );
};
