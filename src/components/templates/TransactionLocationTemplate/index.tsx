import { Map } from "components/organisms";
import { TransactionLocationTemplateWrapper } from "./styled";
import { ICoord } from "types";

interface ITransactionLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord: ICoord;
  /** 거래희망장소 세부 위치*/
  location: string;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent: (message: string) => void;
}

export const TransactionLocationTemplate = ({
  coord,
  location,
  locationErrorEvent
}: ITransactionLocationTemplateProps) => {
  return (
    <TransactionLocationTemplateWrapper>
      <Map
        coord={coord}
        markerInfo={location}
        locationErrorEvent={locationErrorEvent}
      />
    </TransactionLocationTemplateWrapper>
  );
};
