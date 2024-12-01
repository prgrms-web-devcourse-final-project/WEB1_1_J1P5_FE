import styled from "@emotion/styled";

interface IInputWrapperProps {
  focus: boolean;
}

export const InputWrapper: ReturnType<
  typeof styled.div<IInputWrapperProps>
> = styled.div<IInputWrapperProps>`
  border: 1px solid ${({ focus }) => (focus ? "#344fff" : "#ECEEF3")};
  border-radius: 10px;

  input {
    background: transparent;
    font-sie: 1.5rem;
    border: none;
    outline: none;
    width: 100%;
    height: 50px;
    color: #2d2d39;
    padding: 16px;
    box-sizing: border-box;

    transition: all 0.125s ease-in;

    &::placeholder {
      color: #9b9fbc;
    }

    ${(props) =>
      props.onClick &&
      `cursor: pointer;
      `}
  }
`;
