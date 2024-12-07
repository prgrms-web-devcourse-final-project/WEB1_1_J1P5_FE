import styled from "@emotion/styled";

const DefaultLoginButtonWrapper: ReturnType<
  typeof styled.button
> = styled.button`
  height: 3.375rem;
  /* 버튼 초기화 */
  outline: none;
  border: none;
  /* 로그인버튼 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  /* 아이콘을 absolute 왼쪽에 띄우기 위한 스타일 */
  position: relative;
  img {
    position: absolute;
    left: 1rem;
  }
`;

export const KakaoButtonWrapper: typeof DefaultLoginButtonWrapper = styled(
  DefaultLoginButtonWrapper
)`
  background-color: #fee500;
  color: #191919;
`;

export const NaverButtonWrapper: typeof DefaultLoginButtonWrapper = styled(
  DefaultLoginButtonWrapper
)`
  background-color: #03c75a;
  color: #ffffff;
`;
