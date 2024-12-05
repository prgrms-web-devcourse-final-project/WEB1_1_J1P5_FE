import { Badge, Text } from "components/atoms";
import { LinkIcon } from "components/atoms/Icon";
import { getRelativeTime } from "utils";
import {
  CategoryWrapper,
  ItemDetailsWrapper,
  DescriptionWrapper,
  ItemDetailsHeader,
} from "./styled";
import { IconWithText } from "../../molecules";

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
        <CategoryWrapper>
          <IconWithText>
            <IconWithText.Content content={category} />
            <IconWithText.Icon icon={LinkIcon} size="s" />
          </IconWithText>
        </CategoryWrapper>
        <Text variant="body1" content={title} />
        <Text variant="button" content={getRelativeTime(createdAt)} />
      </ItemDetailsHeader>
      <DescriptionWrapper>
        <Text variant="body1" content={description} />
      </DescriptionWrapper>
    </ItemDetailsWrapper>
  );
};
