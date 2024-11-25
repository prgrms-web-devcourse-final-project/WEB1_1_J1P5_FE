import { Image, Text } from "components/atoms";
import { RoundImageWithTextWrapper } from "./styled";

interface IRoundImageWithText {
  /** */
  title: string;
  /** 클릭 이벤트 */
  onClick: () => void;
  /** 이미지 URL */
  imgUrl?: string;
}

export const RoundImageWithText = ({
  title,
  onClick,
  imgUrl,
}: IRoundImageWithText) => {
  return (
    <RoundImageWithTextWrapper onClick={onClick}>
      <Image type="round" url={imgUrl} />
      <Text content={title} />
    </RoundImageWithTextWrapper>
  );
};
