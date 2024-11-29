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
  isCenterMarkerExist?: boolean;
  /** center 좌표 설정 함수 */
  setCenterCoord?: React.Dispatch<React.SetStateAction<any>>;
  /** 현재 위치 좌표 설정 함수  */
  setMyCoord?: React.Dispatch<React.SetStateAction<any>>;
}
