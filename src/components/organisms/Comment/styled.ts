import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";

export const CommentListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentWriteBoxWrapper: ReturnType<typeof styled.div> = styled.div`
  ${InputWrapper} {
    flex: 1;
  }
`;

export const CommentWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
