import styled from "@emotion/styled";
import { TextButtonWrapper } from "components/atoms/Button/TextButton/styled";
import {
  ProfileWrapper,
  ImageWrapper,
  TextWrapper,
} from "components/organisms/Profile/styled";

export const BlockedUserItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  ${ProfileWrapper} {
    gap: ${12 / 16}rem;
    ${TextWrapper} {
      width: 100%;
    }
    ${ImageWrapper} {
      width: 100px;
    }
  }

  ${TextButtonWrapper} {
    padding: 12px 16px;
  }
`;
