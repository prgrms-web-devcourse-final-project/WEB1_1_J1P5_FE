export interface ICoord {
  /** 위도 */
  lat: number;
  /** 경도 */
  lng: number;
}

export interface IMapProps {
  /** 좌표 (위도, 경도) */
  coord?: ICoord;
  /** Center에 고정된 마커 존재 여부 */
  isCenterMarkerExist: boolean;
  /** 최종 좌표를 처리하는 버튼의 클릭 이벤트 */
  onSubmitButtonClick?: (coord: ICoord) => void;
}
