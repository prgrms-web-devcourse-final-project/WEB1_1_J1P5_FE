import styled from "@emotion/styled";

export const LocationMapWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const TitleWrapper: ReturnType<typeof styled.div> = styled.div`
  color: ${({ theme }) => theme.colors.blue_main};
`;
export const TextContainer: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;
