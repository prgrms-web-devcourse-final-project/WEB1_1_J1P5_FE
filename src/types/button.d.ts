export interface IButton {
  title: string;
  background?: ITextButtonProps["backgroundColor"];
  onClick?: () => void;
}

