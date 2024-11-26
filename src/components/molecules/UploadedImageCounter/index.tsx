import { ImageUpload, Text } from "components/atoms";
import { ImageUploadWrapper, UploadedImageCounterContainer } from "./styled";

interface IUploadedImageCounter {
  /** Counter 위쪽 텍스트 */
  text: string;
  /** 현재 업로드 된 이미지 개수 */
  currentCount: number;
  /** file input onChange 이벤트 발생 시 실행 될 함수 */
  onChange: (file: File) => void;
  /** 업로드 받을 수 있는 이미지 개수 */
  totalCount?: number;
}

export const UploadedImageCounter = ({
  text,
  currentCount,
  onChange,
  totalCount = 10,
}: IUploadedImageCounter) => {
  return (
    <UploadedImageCounterContainer>
      <Text content={text} />
      <Text content={`${currentCount}/${totalCount}`} />
      <ImageUploadWrapper>
        <ImageUpload onFileChange={onChange} />
      </ImageUploadWrapper>
    </UploadedImageCounterContainer>
  );
};
