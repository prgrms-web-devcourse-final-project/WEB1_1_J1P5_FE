import { Map } from "components/organisms";
import { TransactionLocationTemplateWrapper } from "./styled";
import { ICoord } from "types";

interface ITransactionLocationTemplateProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord: ICoord;
  /** 거래희망장소 세부 위치*/
  location: string;
}

export const TransactionLocationTemplate = ({
  coord,
  location
}: ITransactionLocationTemplateProps) => {
  return (
    <TransactionLocationTemplateWrapper>
      <Map coord={coord} markerInfo={location} />
    </TransactionLocationTemplateWrapper>
  );
};

