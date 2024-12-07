import styled from "@emotion/styled";
import { ImageUploadWrapper } from "components/atoms/ImageUpload/styled";
import { InputWrapper } from "components/atoms/Input/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { LabeledInputWrapper } from "components/molecules/LabeledInput/styled";

export const ProfileImageWrapper: ReturnType<typeof styled.div> = styled.div`
  max-width: 140px;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  ${ImageUploadWrapper} {
    position: absolute;
    top: 0;
  }
`;

export const ProfileRegistrationFormWrapper: ReturnType<
  typeof styled.form
> = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  ${LabeledInputWrapper} {
    flex: 1;
    justify-content: start;
    width: 100%;
    ${InputWrapper} {
      width: 100%;
    }
  }
  ${TextButtonWrapper} {
    width: 100%;
    height: 3.375rem;
  }
`;
