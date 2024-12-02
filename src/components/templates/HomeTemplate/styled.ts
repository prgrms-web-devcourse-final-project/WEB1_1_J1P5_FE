import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const HomeTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;

  .post-con {
    flex: 1;
    overflow-y: auto;
  }

  ${TextButtonWrapper} {
    position: sticky;
    bottom: 32px;
  }
`;
