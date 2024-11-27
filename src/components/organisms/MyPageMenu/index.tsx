import { Text } from "components/atoms";
import { IconWithText } from "components/molecules";
import { MY_PAGE_MENUS } from "constants/myPageMenus";
import { MainMenuWrapper, MyPageMenuWrapper, SubMenuWrapper } from "./styled";

interface IMyPageMenuProps {
  /** 메뉴 클릭 시 실행 될 함수 */
  onMenuClick: (pathname: string) => void;
}

export const MyPageMenu = ({ onMenuClick }: IMyPageMenuProps) => {
  return (
    <MyPageMenuWrapper>
      {MY_PAGE_MENUS.map(({ title, menus }, idx) => (
        <MainMenuWrapper key={`m_root_${idx}`}>
          <Text content={title} variant="h5" />
          <SubMenuWrapper>
            {menus.map(({ icon, name, pathname }, i) => (
              <IconWithText
                key={`m_${idx}_${i}`}
                onClick={() => onMenuClick(pathname)}
              >
                <IconWithText.Icon icon={icon} size="s" />
                <IconWithText.Content content={name} />
              </IconWithText>
            ))}
          </SubMenuWrapper>
        </MainMenuWrapper>
      ))}
    </MyPageMenuWrapper>
  );
};
