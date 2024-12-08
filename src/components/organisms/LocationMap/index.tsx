import { Text } from "components/atoms";
import { LinkIcon } from "components/atoms/Icon";
import { IconWithText } from "components/molecules";
import { Map } from "components/organisms";
import { LocationMapWrapper, TextContainer, TitleWrapper } from "./styled";
import { ICoord } from "types";

interface ILocationMapProps {
  /** 거래희망장소 좌표 (위도, 경도) */
  coord: ICoord;
  /** 거래희망장소 세부 위치*/
  location: string;
  /** 거래희망장소 클릭 이벤트 */
  onClick?: () => void;
}

export const LocationMap = ({
  coord,
  location,
  onClick,
}: ILocationMapProps) => {
  return (
    <LocationMapWrapper onClick={onClick}>
      <TextContainer>
        <TitleWrapper>
          <Text variant="title_bold" content="거래희망장소" />
        </TitleWrapper>
        <IconWithText>
          <IconWithText.Content
            contentVariant="title_bold"
            content={location}
          />
          <IconWithText.Icon icon={LinkIcon} size="s" />
        </IconWithText>
      </TextContainer>
      <Map coord={coord} />
    </LocationMapWrapper>
  );
};
