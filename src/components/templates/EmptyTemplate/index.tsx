import { Text } from "components/atoms";
import {} from "components/molecules";
import { EmptyTemplateWrapper } from "./styled";

export interface IEmptyTemplateProps {
  type:
    | "default"
    | "search"
    | "chat"
    | "selling"
    | "buying"
    | "completed"
    | "blockedUser";
}

export const EmptyTemplate = ({ type = "default" }: IEmptyTemplateProps) => {
  const postMsg = "현재 지역에는 등록된 글이 없어요";
  const searchMsg = "검색 결과가 존재하지 않아요";
  const chatMsg = "채팅 방이 존재하지 않아요";
  const sellingMsg = "판매중인 목록이 존재하지 않아요";
  const buyingMsg = "구매중인 목록이 존재하지 않아요";
  const completedMsg = "거래완료된 목록이 존재하지 않아요";
  const blockedUserMsg = "차단한 사용자가 없어요";
  const msgMap = new Map<string, string>();
  msgMap.set("default", postMsg);
  msgMap.set("search", searchMsg);
  msgMap.set("chat", chatMsg);
  msgMap.set("selling", sellingMsg);
  msgMap.set("buying", buyingMsg);
  msgMap.set("completed", completedMsg);
  msgMap.set("blockedUser", blockedUserMsg);
  const msg = msgMap.get(type) as string;

  return (
    <EmptyTemplateWrapper>
      <Text content={msg}></Text>
    </EmptyTemplateWrapper>
  );
};
