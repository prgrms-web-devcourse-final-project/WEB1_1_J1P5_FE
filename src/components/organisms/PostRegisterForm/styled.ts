import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const PostRegisterFormWrapper: ReturnType<
  typeof styled.form
> = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  width: calc(100% - 2rem);

  ${TextButtonWrapper} {
    width: 100%;
  }
`;

export const DivWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;

