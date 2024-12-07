import { IconButton, Input, TextButton } from "components/atoms";
import { InputWithButtonWrapper } from "./styled";
import { IconType } from "types";
import { SendIcon } from "components/atoms/Icon";
import type { ComponentProps } from "react";

interface IInputWithButtonProps {
  /** Input 컴포넌트의 value */
  value: string;
  /** Input 컴포넌트의 value를 수정하는 함수 */
  setValue: (value: string) => void;
  /** Button에 들어갈 텍스트 */
  buttonText: string;
  /** 버튼 클릭 시 실행 될 함수 */
  onButtonClick: () => void;
  /** Input 컴포넌트의 placeholder */
  placeholder?: string;
  isIcon?: boolean;
  icon?: IconType;
  variant?: ComponentProps<typeof TextButton>["variant"];
}

export const InputWithButton = ({
  value,
  setValue,
  buttonText,
  onButtonClick,
  placeholder = "",
  isIcon = false,
  icon,
  variant,
}: IInputWithButtonProps) => {
  return (
    <InputWithButtonWrapper>
      <Input
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        onKeyDown={onButtonClick}
      />
      {isIcon ? (
        <IconButton
          icon={icon || SendIcon}
          onClick={onButtonClick}
        ></IconButton>
      ) : (
        <TextButton
          variant={variant}
          text={buttonText}
          onClick={onButtonClick}
        />
      )}
    </InputWithButtonWrapper>
  );
};
