import styled from "@emotion/styled";

export const ProfileWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ImageWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 64px;
`;

export const TextWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  flex-direction: column;
`;
