import { IconButton, Text } from "components/atoms";
import { DownIcon, SearchIcon } from "components/atoms/Icon";
import { IconWithText } from "components/molecules";
import { ButtonsWrapper, HeaderWrapper } from "./styled";

interface IHeaderProps {
  /** Header 타입 */
  type: "default" | "home";
  /** 왼쪽에 출력 될 타이틀 */
  title: string;
  /** 알림 아이콘 클릭 시 함수 */
  onNotificationClick: () => void;
  /** 검색 아이콘 클릭 시 함수 */
  onSearchClick: () => void;
  /** (type="home") 동네 클릭 시 함수 */
  onLocationClick: () => void;
}

export const Header = ({
  type,
  title,
  onLocationClick,
  onSearchClick,
}: //onNotificationClick,
IHeaderProps) => {
  return (
    <HeaderWrapper>
      {type === "home" ? (
        <IconWithText onClick={onLocationClick}>
          <IconWithText.Content
            content={title}
            contentVariant={"writing_bold"}
          />
          <IconWithText.Icon icon={DownIcon} />
        </IconWithText>
      ) : (
        <Text variant="title_bold" content={title} />
      )}
      <ButtonsWrapper>
        {type === "home" && (
          <IconButton
            icon={SearchIcon}
            onClick={onSearchClick}
            backgroundColor="transparent"
          />
        )}
        {/* 알림 쪽 아이콘 일괄 삭제*/}
        {/* <IconButton
          icon={NotificationIcon}
          onClick={onNotificationClick}
          backgroundColor="transparent"
        /> */}
      </ButtonsWrapper>
    </HeaderWrapper>
  );
};
