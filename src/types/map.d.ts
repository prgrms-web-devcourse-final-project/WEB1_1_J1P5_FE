export interface ICoord {
  /** 위도 */
  lat: number;
  /** 경도 */
  lng: number;
}

export interface IMapProps {
  coord?: ICoord;
  isCenterMarkerExist: boolean;
  onSubmitButtonClick?: (coord: ICoord) => void;
}
