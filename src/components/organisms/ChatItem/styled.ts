import styled from "@emotion/styled";
import { ImageWrapper } from "components/atoms/Image/styled";

export const ChatItemWrapper: ReturnType<typeof styled.div> = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background-color: #eeeeee;
  }

  /* width를 주지 않으면 보이지 않아서 추가*/
  ${ImageWrapper} {
    //70px = 4.375rem
    width: 4.375rem;
  }

  .img-msg-con {
    display: flex;
    gap: 1rem;
    flex: 1;
  }

  .msg-con {
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* max-width 벗어나면 ... 처리 */
    p {
      white-space: nowrap;
      overflow: hidden;
      max-width: 12.5rem;
      text-overflow: ellipsis;
    }
  }

  .time-cnt-con {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .time {
      height: 1.45rem;
      display: flex;
      align-items: center;
    }
  }
`;
