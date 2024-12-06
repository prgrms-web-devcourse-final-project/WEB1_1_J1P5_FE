import styled from "@emotion/styled";

export const ProfileWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 10px 10px 0px 0px;
`;

export const ImageWrapper: ReturnType<typeof styled.div> = styled.div`
  width: 100%
  aspect-ratio: 1/1;
  `;

export const TextWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  width: 242px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const TextGuideColor: ReturnType<typeof styled.div> = styled.div`
  color: #707192;
  text-align: center;
`;
