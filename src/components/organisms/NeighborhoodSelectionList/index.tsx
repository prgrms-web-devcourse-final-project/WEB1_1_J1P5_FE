import { Text } from "components/atoms";
import { TextDividerList } from "components/molecules";
import { NeighborhoodSelectionListWrapper } from "./styled";

interface INeighborhoodSelectionListrops {
  /** 동네 리스트 */
  neighborhoods: string[];
  /** 동네 클릭 이벤트 */
  onClick: (neighborhood: string) => void;
}

export const NeighborhoodSelectionList = ({
  neighborhoods,
  onClick,
}: INeighborhoodSelectionListrops) => {
  return (
    <NeighborhoodSelectionListWrapper>
      <Text content={"근처동네"} variant={"h5"}></Text>
      <TextDividerList
        items={neighborhoods}
        onClick={onClick}
      ></TextDividerList>
    </NeighborhoodSelectionListWrapper>
  );
};
