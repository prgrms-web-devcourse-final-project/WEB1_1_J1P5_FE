import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const HomeTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .post-con {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 1.25rem;
  }

  ${TextButtonWrapper} {
    position: sticky;
    bottom: 5.25rem;
  }
`;
