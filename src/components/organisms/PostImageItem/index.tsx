import { IconButton, Image, Text } from "components/atoms";
import { PostImageItemWrapper } from "./styled";
import { XIcon } from "components/atoms/Icon";

interface IPostImageItemProps {
  /** 이미지 경로 */
  imgUrl: string;
  /** 대표사진 유무 */
  isThumbnail: boolean;
  /** X 버튼 onClick 이벤트 */
  onClick: () => void;
}

export const PostImageItem = ({
  imgUrl,
  isThumbnail,
  onClick
}: IPostImageItemProps) => {
  return (
    <PostImageItemWrapper>
      <Image url={imgUrl}></Image>
      <IconButton
        icon={XIcon}
        onClick={onClick}
        backgroundColor="transparent"
      ></IconButton>
      {isThumbnail && <Text content={"대표 사진"}></Text>}
    </PostImageItemWrapper>
  );
};
