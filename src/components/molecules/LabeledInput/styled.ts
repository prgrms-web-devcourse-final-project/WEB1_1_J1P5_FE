import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";

export const LabeledInputWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  ${InputWrapper} {
    input,
    p {
      /* 가이드/regular */
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 145%; /* 18.85px */
      letter-spacing: -0.325px;
    }
    input {
      height: 50px;
    }
  }
`;
