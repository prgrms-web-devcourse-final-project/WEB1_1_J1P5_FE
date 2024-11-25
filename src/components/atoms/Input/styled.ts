import styled from "@emotion/styled";

export const InputWrapper: ReturnType<typeof styled.input> = styled.input`
  ${(props) => props.onClick && `cursor: pointer;`}
`;
