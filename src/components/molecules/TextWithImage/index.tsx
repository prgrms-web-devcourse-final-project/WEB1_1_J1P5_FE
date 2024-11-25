import { Text, Image } from "components/atoms";
import { DEFAULT_IMG_PATH } from "constants/imgPath";

import { TextWithImageWrapper } from "./styled";

export interface ITextWithImageProps {
  /** title */
  title: string;
  /** description */
  desc: string;
  /** 이미지 url  */
  imgUrl?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
}

export const TextWithImage = ({
  title,
  desc,
  imgUrl = DEFAULT_IMG_PATH,
  onClick
}: ITextWithImageProps) => {
  return (
    <TextWithImageWrapper
      title={title}
      desc={desc}
      imgUrl={imgUrl}
      onClick={onClick}
    >
      <div className="text-con">
        {/** 이후 디자인 나오고 Text 에 variant 추가 되면 변경*/}
        <Text content={title} variant={"body1"}></Text>
        {/** 이후 디자인 나오고 Text 에 variant 추가 되면 변경*/}
        <div className="text-desc">
          <Text content={desc} variant={"button"}></Text>
        </div>
      </div>
      <Image type="square" url={imgUrl} />
    </TextWithImageWrapper>
  );
};

