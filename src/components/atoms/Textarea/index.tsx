import { type ChangeEvent, useCallback, useState } from "react";
import { TextareaWrapper } from "./styled";

interface ITextareaProps {
  /** Textarea의 id */
  id?: string;
  /** Textarea의 name */
  name?: string;
  /** Textarea의 value */
  value: string;
  /** placeholder */
  placeholder?: string;
  /** value set 함수 */
  setValue?: (value: string) => void;
}

export const Textarea = ({
  id,
  name,
  value,
  placeholder,
  setValue
}: ITextareaProps) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <TextareaWrapper focus={focus}>
      <textarea
        id={id}
        name={name}
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={500}
      />
    </TextareaWrapper>
  );
};
