import styled from "@emotion/styled";

export const ToastManagerWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1500;
`;

export const ToastItemWrapper: ReturnType<typeof styled.div> = styled.div`
  font-weight: 500;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 300px;
  height: 50px;
  padding: 0 10px;
  border-radius: 16px;
  border: none;
  background: rgba(218, 218, 218, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  opacity: 1;
  transition: opacity 0.4s ease-out;

  &:last-of-type {
    animation: move 0.4s ease-out forwards;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  @keyframes move {
    0% {
      margin-bottom: 0;
    }
    100% {
      margin-bottom: 32px;
    }
  }
`;

