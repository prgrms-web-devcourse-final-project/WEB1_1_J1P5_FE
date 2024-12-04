export interface ICoord {
  /** 위도 */
  lat: number;
  /** 경도 */
  lng: number;
}

export interface IMapProps {
  /** Center에 고정된 마커 존재 여부 */
  isCenterMarkerExist?: boolean;
  /** 위치 권한 가져오기 실패 시 모달을 실행할 함수 */
  locationErrorEvent?: (message: string) => void;
  /** 마커에 들어간 info */
  markerInfo?: string;
  /** 좌표 (위도, 경도) */
  coord?: ICoord;
  /** center 좌표 설정 함수 */
  setCenterCoord?: React.Dispatch<React.SetStateAction<any>>;
  /** 현재 위치 좌표 설정 함수  */
  setMyCoord?: React.Dispatch<React.SetStateAction<any>>;
}
