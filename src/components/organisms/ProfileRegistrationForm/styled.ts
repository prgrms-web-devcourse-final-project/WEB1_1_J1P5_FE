import styled from "@emotion/styled";
import { ImageUploadWrapper } from "components/atoms/ImageUpload/styled";
import { InputWrapper } from "components/atoms/Input/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import { LabeledInputWrapper } from "components/molecules/LabeledInput/styled";

export const ProfileImageWrapper: ReturnType<typeof styled.div> = styled.div`
  max-width: 200px;
  width: calc(100% - 2rem);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  ${ImageUploadWrapper} {
    position: absolute;
    top: 0;
  }
`;

export const ProfileRegistrationFormWrapper: ReturnType<typeof styled.form> =
  styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    ${LabeledInputWrapper} {
      flex: 1;
      justify-content: start;
      width: calc(100% - 2rem);
      ${InputWrapper} {
        width: 100%;
      }
    }
    ${TextButtonWrapper} {
      width: calc(100% - 2rem);
    }
  `;
