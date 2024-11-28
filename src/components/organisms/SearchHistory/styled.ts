import styled from "@emotion/styled";

export const SearchHistoryWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .search-top-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
