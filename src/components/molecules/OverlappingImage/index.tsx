import {
  BackImageWrapper,
  FrontImageWrapper,
  OverlappingImageContainer,
} from "./styled";
import { Image } from "components/atoms";

interface IOverlappingImageProps {
  /** 앞에 있는 이미지 URL */
  frontImgUrl?: string;
  /** 뒤에 있는 이미지 URL */
  backImgUrl?: string;
  /** 뒤에 있는 이미지의 shape type */
  type?: "round" | "square";
}

export const OverlappingImage = ({
  frontImgUrl,
  backImgUrl,
  type = "round",
}: IOverlappingImageProps) => {
  return (
    <OverlappingImageContainer>
      <BackImageWrapper>
        <Image type={type} url={backImgUrl} alt="이미지1" />
      </BackImageWrapper>
      <FrontImageWrapper>
        <Image type="square" url={frontImgUrl} alt="이미지2" />
      </FrontImageWrapper>
    </OverlappingImageContainer>
  );
};
