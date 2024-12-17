import { Text } from "components/atoms/Text";
import { TextButtonWrapper } from "./styled";
import { TextVariant } from "components/atoms/Text";

export interface ITextButtonProps {
  /** 버튼에 들어갈 텍스트 */
  text: string;
  /** 버튼 사이즈 (default: m) */
  size?: "s" | "m" | "l";
  /** 버튼 배경색: (default | transparent) */
  backgroundColor?: "default" | "red" | "grey" | "transparent";
  /** onClick 이벤트*/
  onClick?: () => void;
  /** Text variant 타입 */
  variant?: TextVariant;
  /** 버튼 disabled */
  disabled?: boolean;
}
export const TextButton = ({
  text = "",
  size = "m",
  backgroundColor = "default",
  onClick = () => {},
  variant = "btn_bold",
  disabled = false,
}: ITextButtonProps) => {
  return (
    <TextButtonWrapper
      text={text}
      size={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
      disabled={disabled}
    >
      <Text content={text} variant={variant} />
    </TextButtonWrapper>
  );
};
