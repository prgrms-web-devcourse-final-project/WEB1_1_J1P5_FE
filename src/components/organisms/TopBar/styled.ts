import styled from "@emotion/styled";
import { InputWrapper } from "components/atoms/Input/styled";
import { Body1Wrapper } from "components/atoms/Text/styled";

const CommonIconWrapper: ReturnType<typeof styled.div> = styled.div``;
export const TopBarBackIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)``;
export const TopBarIconWrapper: typeof CommonIconWrapper = styled(
  CommonIconWrapper,
)``;

export const TopBarWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  & > ${Body1Wrapper} {
    flex: 1;
    padding: 0.5rem;
    text-align: center;
  }
  & > ${InputWrapper} {
    flex: 1;
    height: auto;
    padding: 0.5rem 1rem;
    background-color: #eee;
  }
  &:has(${InputWrapper}) ${TopBarIconWrapper} {
    position: absolute;
    right: 1.5rem;
  }
`;
