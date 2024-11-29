import styled from "@emotion/styled";
import { OverlappingImageContainer } from "components/molecules/OverlappingImage/styled";

export const ChatItemWrapper: ReturnType<typeof styled.div> = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
  /* width를 주지 않으면 보이지 않아서 추가*/
  ${OverlappingImageContainer} {
    width: 55px;
  }

  .img-msg-con {
    display: flex;
    gap: 16px;
    flex: 1;
  }

  .msg-con {
    /* max-width 벗어나면 ... 처리 */
    p {
      white-space: nowrap;
      overflow: hidden;
      max-width: 200px;
      text-overflow: ellipsis;
    }
  }

  .time-cnt-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`;
