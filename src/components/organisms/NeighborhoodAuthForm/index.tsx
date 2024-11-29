import { useCallback, useEffect, useRef, useState } from "react";
import { Text, TextButton } from "components/atoms";
import { NeighborhoodAuthFormWrapper } from "./styled";
import { Map } from "components/organisms";
import { ICoord } from "types";

interface INeighborhoodAuthFormProps {
  /** 동네 인증 버튼 클릭 이벤트 */
  onSubmitButtonClick?: (coord: ICoord) => void;
}

export const NeighborhoodAuthForm = ({
  onSubmitButtonClick
}: INeighborhoodAuthFormProps) => {
  const [myCoord, setMyCoord] = useState<any>(null);
  const [myICoord, setMyICoord] = useState<ICoord | null>(null);
  const [myNeighborhood, setMyNeighborhood] = useState<string>("");

  useEffect(() => {
    if (myCoord) {
      const iCoord = {
        lat: myCoord.lat(),
        lng: myCoord.lng()
      } as const;
      setMyICoord(iCoord);

      // TODO: 위경도를 가지고 'OO동' 반환하는 유틸함수에 저장
      setMyNeighborhood(
        `lat: ${iCoord.lat.toString()}, lng: ${iCoord.lng.toString()}`
      );
    }
  }, [myCoord]);

  const handleButtonClick = useCallback(() => {
    if (onSubmitButtonClick && myICoord) {
      onSubmitButtonClick(myICoord);
    }
  }, [myICoord, onSubmitButtonClick]);

  return (
    <NeighborhoodAuthFormWrapper>
      <Map setMyCoord={setMyCoord} />
      <Text
        content={myNeighborhood && `현재 위치가 '${myNeighborhood}'에 있어요`}
      />
      <TextButton text={"동네인증 완료하기"} onClick={handleButtonClick} />
    </NeighborhoodAuthFormWrapper>
  );
};

