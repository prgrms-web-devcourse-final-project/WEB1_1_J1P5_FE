import styled from "@emotion/styled";

export const ChatOverviewRootWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  width: max-content;
  margin: 0 1rem;
`;

export const PanelWrapper: ReturnType<typeof styled.div> = styled.div`
  flex: 1;
`;
