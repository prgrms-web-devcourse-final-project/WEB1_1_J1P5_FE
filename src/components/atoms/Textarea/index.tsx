import { type ChangeEvent, useCallback, useState } from "react";
import { TextareaWrapper } from "./styled";

interface ITextareaProps {
  /** Textarea의 name */
  name?: string;
  /** Textarea의 value */
  value: string;
  /** placeholder */
  placeholder?: string;
  /** value set 함수 */
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const Textarea = ({
  name,
  value,
  placeholder,
  setValue
}: ITextareaProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TextareaWrapper focus={focus}>
      <textarea
        name={name}
        onChange={handleInputChange}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </TextareaWrapper>
  );
};

