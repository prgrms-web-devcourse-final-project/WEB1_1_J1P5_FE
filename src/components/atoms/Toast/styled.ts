import styled from "@emotion/styled";

export const ToastManagerWrapper: ReturnType<typeof styled.div> = styled.div`
  position: fixed;
  // TODO: 토스트 어디서부터 등장할지 위치 논의 필요
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
`;

export const ToastItemWrapper: ReturnType<typeof styled.div> = styled.div`
  position: relative;
  display: flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 10px;
  background: rgba(19, 27, 83, 0.3);
  backdrop-filter: blur(2px);
  box-sizing: border-box;

  opacity: 1;
  transition: opacity 0.4s ease-out;

  &:last-of-type {
    animation: move 0.4s ease-out forwards;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  // TODO: 애니메이션을 수정해야하나 고민
  @keyframes move {
    0% {
      margin-bottom: 0;
    }
    100% {
      margin-bottom: 12px;
    }
  }

  color: var(--white, #fff);
  /* 설명/regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: -0.35px;
  white-space: nowrap;
`;

// export const ToastItemWrapper: ReturnType<typeof styled.div> = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;

//   width: 300px;
//   height: 50px;
//   padding: 0 10px;
//   border-radius: 16px;
//   border: none;
//   background: rgba(218, 218, 218, 0.5);
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
//   box-sizing: border-box;

//   opacity: 1;
//   transition: opacity 0.4s ease-out;

//   &:last-of-type {
//     animation: move 0.4s ease-out forwards;
//   }

//   &:not(:last-of-type) {
//     margin-bottom: 8px;
//   }

//   @keyframes move {
//     0% {
//       margin-bottom: 0;
//     }
//     100% {
//       margin-bottom: 32px;
//     }
//   }
// `;
