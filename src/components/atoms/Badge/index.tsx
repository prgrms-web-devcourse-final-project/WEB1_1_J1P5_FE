import { Text } from "../Text";
import { BadgeChatWrapper, BadgeWrapper } from "./styled";

type BadgeType = "default" | "chat";
export interface IBadgeProps {
  /** Badge 의 내용으로 들어가는 Text */
  text: string;
  type?: BadgeType;
}
export const Badge = ({ text, type = "default" }: IBadgeProps) => {
  if (type === "chat") {
    return (
      <BadgeChatWrapper>
        <Text variant="badge_regular" content={text}></Text>
      </BadgeChatWrapper>
    );
  }
  return <BadgeWrapper>{text}</BadgeWrapper>;
};
