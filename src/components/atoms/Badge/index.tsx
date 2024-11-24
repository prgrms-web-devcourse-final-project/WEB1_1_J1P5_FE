import { BadgeWrapper } from "./styled";

interface IBadgeProps {
  /** Badge 의 내용으로 들어가는 Text */
  text: string;
}
export const Badge = ({ text }: IBadgeProps) => {
  return <BadgeWrapper>{text}</BadgeWrapper>;
};
