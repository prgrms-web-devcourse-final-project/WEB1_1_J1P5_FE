import { Text } from "components/atoms";
import {} from "components/molecules";
import { EmptyTemplateWrapper } from "./styled";

interface IEmptyTemplateProps {
  type: "default" | "search";
}

export const EmptyTemplate = ({ type = "default" }: IEmptyTemplateProps) => {
  const postMsg = "현재 지역에는 등록된 글이 없어요";
  const searchMsg = "검색 결과가 존재하지 않아요";
  const msgMap = new Map<string, string>();
  msgMap.set("default", postMsg);
  msgMap.set("search", searchMsg);

  const msg = msgMap.get(type) as string;

  return (
    <EmptyTemplateWrapper>
      <Text content={msg}></Text>
    </EmptyTemplateWrapper>
  );
};
