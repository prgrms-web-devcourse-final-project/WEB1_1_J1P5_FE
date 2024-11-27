import { IconType } from "types/icon";
import { IconWithTextWrapper } from "./styled";
import { Text } from "components/atoms";
export interface IIconWithTextProps {
  /** 아이콘 컴포넌트 : atoms/Icon 경로 참조 */
  icon: IconType;
  /** Text 내용 */
  content: string;
  /** 부가설명 내용(권한 설정 화면) */
  desc?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 아이콘 위치 ,default는 왼쪽 */
  iconLocation?: "default" | "right";
}
export const IconWithTextLegacy = ({
  icon,
  content,
  desc,
  onClick,
  iconLocation = "default",
}: IIconWithTextProps) => {
  const IconComponent = icon;
  return (
    <IconWithTextWrapper
      icon={icon}
      content={content}
      desc={desc}
      onClick={onClick}
      iconLocation={iconLocation}
    >
      <IconComponent></IconComponent>
      <div className="text-con">
        {/** 이후 디자인 나오고 Text 에 variant 추가 되면 변경*/}
        <Text content={content} variant={"body1"}></Text>
        {/** 이후 디자인 나오고 Text 에 variant 추가 되면 변경*/}
        {desc && <Text content={desc} variant={"button"}></Text>}
      </div>
    </IconWithTextWrapper>
  );
};
