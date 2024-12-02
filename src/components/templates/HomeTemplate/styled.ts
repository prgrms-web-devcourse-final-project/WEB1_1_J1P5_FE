import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";

export const HomeTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  ${TextButtonWrapper} {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -80px);
  }

  .post-con {
    flex: 1;
  }
`;
