import styled from "@emotion/styled";

export const MarketPriceTemplateWrapper: ReturnType<
  typeof styled.div
> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .post-con {
    flex: 1;
    overflow-y: auto;
  }
`;
