import styled from "@emotion/styled";
import { IconWithTextContentWrapper } from "components/molecules/IconWithText/styled";

export const MyPageMenuWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const MainMenuWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubMenuWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ColorWrapper: ReturnType<typeof styled.div> = styled.div`
  color: var(--blue-text-blue, #131b53);
`;

export const TextContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  width: 100%;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;

  border-radius: 10px;
  border: 1px solid var(--grey-field-deactivate, #eceef3);
  cursor: pointer; /* 클릭 포인터 추가 */

  &:hover {
    background-color: #eeeeee;
  }

  ${IconWithTextContentWrapper} {
    color: var(--grey-main-text, #2d2d39);
  }
`;
