import { DEFAULT_IMG_PATH } from "constants/imgPath";
import { ImageElementWrapper, ImageWrapper } from "./styled";

export interface IImage {
  /** Imgae 타입 */
  type?: "default" | "round" | "square";
  /** 이미지 url  */
  url?: string;
}
export const Image = ({ type = "default", url = DEFAULT_IMG_PATH }: IImage) => {
  return (
    <ImageWrapper type={type}>
      <ImageElementWrapper src={url} />
    </ImageWrapper>
  );
};
