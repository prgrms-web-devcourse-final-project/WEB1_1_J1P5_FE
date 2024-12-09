import { IconButton, Input, Text } from "components/atoms";
import { BackIcon, NoIcon } from "components/atoms/Icon";
import type { IconType } from "types";
import {
  TopBarBackIconWrapper,
  TopBarIconWrapper,
  TopBarWrapper,
} from "./styled";

interface ITopBarProps {
  children: React.ReactNode;
}

const TopBarRoot = ({ children }: ITopBarProps) => {
  return <TopBarWrapper>{children}</TopBarWrapper>;
};

interface ITopBarBackIconProps {
  /** 뒤로가기 아이콘 클릭 함수 */
  onBackIconClick: () => void;
}

const TopBarBackIcon = ({ onBackIconClick }: ITopBarBackIconProps) => {
  return (
    <TopBarBackIconWrapper>
      <IconButton
        size="s"
        icon={BackIcon}
        onClick={onBackIconClick}
        backgroundColor="transparent"
      />
    </TopBarBackIconWrapper>
  );
};

interface ITopBarIconProps {
  /** 우측 아이콘 컴포넌트 */
  icon?: IconType;
  /** 우측 아이콘 클릭 함수 */
  onIconClick?: () => void;
}

const TopBarIcon = ({ icon = NoIcon, onIconClick }: ITopBarIconProps) => {
  return (
    <TopBarIconWrapper>
      <IconButton
        size="s"
        icon={icon}
        onClick={onIconClick}
        backgroundColor="transparent"
      />
    </TopBarIconWrapper>
  );
};

interface ITopBarTitleProps {
  /** 타이틀 텍스트 */
  title: string;
}

const TopBarTitle = ({ title }: ITopBarTitleProps) => {
  return <Text variant="body1" content={title} />;
};

interface ITopBarInputProps {
  /** input value */
  value: string;
  /** input value 변경 함수 */
  setValue: (value: string) => void;
  /** placeholder */
  placeholder?: string;
  /** 엔터 클릭 시 함수 */
  onEnter?: () => void;
}

const TopBarInput = ({
  value,
  setValue,
  placeholder = "",
  onEnter,
}: ITopBarInputProps) => {
  return (
    <Input
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      onKeyDown={onEnter}
    />
  );
};

export const TopBar: typeof TopBarRoot & {
  BackIcon: typeof TopBarBackIcon;
  Icon: typeof TopBarIcon;
  Title: typeof TopBarTitle;
  Input: typeof TopBarInput;
} = Object.assign(TopBarRoot, {
  BackIcon: TopBarBackIcon,
  Icon: TopBarIcon,
  Title: TopBarTitle,
  Input: TopBarInput,
});
