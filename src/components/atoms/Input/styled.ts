import styled from "@emotion/styled";

interface IInputWrapperProps {
  focus: boolean;
}

export const InputWrapper: ReturnType<
  typeof styled.div<IInputWrapperProps>
> = styled.div<IInputWrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  border: 1px solid ${({ focus }) => (focus ? "#344fff" : "#ECEEF3")};
  border-radius: 10px;
  width: 100%;
  height: 3.125rem;
  padding: 1rem;

  p {
    font-size: 1rem;
    line-height: 140%;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 50px;
    color: #2d2d39;
    box-sizing: border-box;
    padding: 0px;

    transition: all 0.125s ease-in;

    &::placeholder {
      color: #9b9fbc;
    }

    ${(props) =>
      props.onClick &&
      `cursor: pointer;
      `}
  }

  input,
  p {
    /* 가이드/regular */
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%; /* 18.85px */
    letter-spacing: -0.325px;
  }
`;
