import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";

const CommonIconWrapper: ReturnType<typeof styled.div> = styled.div`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
`;
export const TopBarBackIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)`
  left: 1rem;
`;
export const TopBarIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)`
  right: 1rem;
`;

export const TopBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e9e9e9;
  position: relative;
  padding: 1rem 0;
  & > ${InputWrapper} {
    flex: 1;
    margin: 0 4.5rem;
  }
`;
