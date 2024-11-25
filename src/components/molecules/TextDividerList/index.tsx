import { Fragment } from "react";
import { Divider, Text } from "components/atoms";
import { TextDividerTextWrapper, TextDividerListWrapper } from "./styled";

interface ITextDividerListProps {
  /** 리스트에 표시 될 아이템 목록 */
  items: string[];
  /** 아이템 클릭 시 실행 될 이벤트 */
  onClick: (item: string) => void;
}

export const TextDividerList = ({ items, onClick }: ITextDividerListProps) => {
  return (
    <TextDividerListWrapper>
      {items.map((item, idx) => (
        <Fragment key={`${idx}_${item}`}>
          <TextDividerTextWrapper>
            <Text content={item} onClick={() => onClick(item)} />
          </TextDividerTextWrapper>
          <Divider />
        </Fragment>
      ))}
    </TextDividerListWrapper>
  );
};
