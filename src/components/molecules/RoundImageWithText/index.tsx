import { Image, Text } from "components/atoms";
import { RoundImageWithTextWrapper } from "./styled";

interface IRoundImageWithText {
  /** 이미지 아래 텍스트 */
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
      <Text content={title} variant="tag_regular" />
    </RoundImageWithTextWrapper>
  );
};
