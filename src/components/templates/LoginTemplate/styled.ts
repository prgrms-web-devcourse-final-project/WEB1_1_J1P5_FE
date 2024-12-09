import styled from "@emotion/styled";
import { LogoWrapper } from "components/atoms/Logo/styled";

export const LoginButtonWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 3rem;
`;

export const LoginTemplateWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  white-space: break-spaces;

  padding: 2rem 1rem 1rem;

  ${LogoWrapper} {
    flex: 1;
    align-self: center;
    width: 120px;
    height: auto;
  }
`;
