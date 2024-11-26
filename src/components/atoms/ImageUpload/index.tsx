import { ImageUploadWrapper } from "./styled";

interface IImageUploadProps {
  /** 파일을 선택했을 때 동작하는 로직,이후 파라미터 같은 부분 별도 커스텀 필요 합니다. */
  onFileChange: (file: File) => void;
}
export const ImageUpload = ({ onFileChange }: IImageUploadProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <ImageUploadWrapper>
      <input type="file" onChange={handleFileChange} />
    </ImageUploadWrapper>
  );
};
