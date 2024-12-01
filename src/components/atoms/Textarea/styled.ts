import styled from "@emotion/styled";

interface ITextareaWrapperProps {
  focus: boolean;
}

export const TextareaWrapper: ReturnType<
  typeof styled.div<ITextareaWrapperProps>
> = styled.div<ITextareaWrapperProps>`
  border: 1px solid ${({ focus }) => (focus ? "#344fff" : "#ECEEF3")};
  border-radius: 10px;

  textarea {
    background: transparent;
    font-sie: 1.5rem;
    border: none;
    outline: none;
    width: 100%;
    height: 140px;
    color: #2d2d39;
    padding: 16px;
    resize: none;
    overflow-y: auto;
    box-sizing: border-box;

    transition: all 0.125s ease-in;

    &::placeholder {
      color: #9b9fbc;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-button:vertical:start:decrement,
    &::-webkit-scrollbar-button:vertical:end:decrement {
      display: block;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #eceef3;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  }
`;

