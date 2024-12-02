import { Text } from "components/atoms";
import {} from "components/molecules";
import { EmptyTemplateWrapper } from "./styled";

interface IEmptyTemplateProps {
  type: string;
}

export const EmptyTemplate = ({ type }: IEmptyTemplateProps) => {
  const msg = "현재 지역에는 등록된 글이 없어요";
  return (
    <EmptyTemplateWrapper>
      <Text content={msg}></Text>
    </EmptyTemplateWrapper>
  );
};
