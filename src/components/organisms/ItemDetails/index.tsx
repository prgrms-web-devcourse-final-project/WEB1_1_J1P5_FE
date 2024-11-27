import { Badge, Text } from "components/atoms";
import { getRelativeTime } from "utils";
import {
  CategoryAndCreatedAtWrapper,
  ItemDetailsWrapper,
  DescriptionWrapper,
  ItemDetailsHeader,
} from "./styled";

interface IItemDetailsProps {
  /** 상품의 제목 */
  title: string;
  /** 카테고리 */
  category: string;
  /** 작성 일자 */
  createdAt: string;
  /** 내용 */
  description: string;
  /** 판매 종료 여부 */
  isDoneDeal?: boolean;
}

export const ItemDetails = ({
  title,
  category,
  createdAt,
  description,
  isDoneDeal,
}: IItemDetailsProps) => {
  return (
    <ItemDetailsWrapper>
      {isDoneDeal && <Badge text="거래완료" />}
      <ItemDetailsHeader>
        <Text variant="h5" content={title} />
        <CategoryAndCreatedAtWrapper>
          <Text variant="button" content={category} />
          <Text variant="button" content={"·"} />
          <Text variant="button" content={getRelativeTime(createdAt)} />
        </CategoryAndCreatedAtWrapper>
      </ItemDetailsHeader>
      <DescriptionWrapper>
        <Text variant="body1" content={description} />
      </DescriptionWrapper>
    </ItemDetailsWrapper>
  );
};
