import { Image, Text, TextButton } from "components/atoms";
import { formatToDateTime, getRelativeTime } from "utils";
import { useRemainingTimer } from "hooks";
import type { IconType } from "types";
import {
  PostItemButtonContainerWrapper,
  PostItemContainerWrapper,
  PostItemImageWrapper,
  PostItemTitleWrapper,
  PostItemLocationAndTimeWrapper,
  PostItemPriceWrapper,
  PostItemRemainingTimeWrapper,
  PostItemRootWrapper,
} from "./styled";
import { TextVariant } from "components/atoms/Text";

/* -------------------------------------------------------------------
 * PostItem Root
 * ------------------------------------------------------------------- */

interface IPostItemRootProps {
  children: React.ReactNode;
  onClick: () => void;
}

/**
 * PostItemRoot
 * @param children
 * @param onClick PostItem 클릭 시 실행될 함수
 */
const PostItemRoot = ({ children, onClick }: IPostItemRootProps) => {
  return (
    <PostItemRootWrapper onClick={onClick}>{children}</PostItemRootWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem Image
 * ------------------------------------------------------------------- */

export interface IPostItemImageProps {
  imgUrl: string;
  size?: "default" | "mini";
}

/**
 * 이미지 컴포넌트
 * @param imgUrl 이미지 경로
 * @param size 이미지 사이즈 (default: default)
 * 	- default: 84px
 * 	- mini: 60px
 */
const PostItemImage = ({ imgUrl, size = "default" }: IPostItemImageProps) => {
  return (
    <PostItemImageWrapper size={size}>
      <Image type="square" url={imgUrl} alt="PostItem Image" />
    </PostItemImageWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem Container
 * ------------------------------------------------------------------- */

interface IPostItemContainerProps {
  children: React.ReactNode;
}

/**
 * Image/ButtonContainer를 제외한 PostItem의 자식 컴포넌트들을 묶을 때 사용하는 컴포넌트
 */
const PostItemContainer = ({ children }: IPostItemContainerProps) => {
  return <PostItemContainerWrapper>{children}</PostItemContainerWrapper>;
};

/* -------------------------------------------------------------------
 * PostItem Title
 * ------------------------------------------------------------------- */

interface IPostItemTitleProps {
  title: string;
}

/**
 * Title 컴포넌트
 * @param title 제목
 */
const PostItemTitle = ({ title }: IPostItemTitleProps) => {
  return <PostItemTitleWrapper><Text variant="title_bold" content={title} /></PostItemTitleWrapper>;
};

/* -------------------------------------------------------------------
 * PostItem LocationAndTime
 * ------------------------------------------------------------------- */

interface IPostItemLocationAndTimeProps {
  address: string;
  uploadTime: string;
  type?: string;
}

/**
 * 동네와 게시일을 표시하는 컴포넌트
 * @param address 주소(동네)
 * @param uploadTime 게시일
 */
const PostItemLocationAndTime = ({
  address,
  uploadTime,
  type = "default",
}: IPostItemLocationAndTimeProps) => {
  const time =
    type === "default"
      ? getRelativeTime(uploadTime)
      : formatToDateTime(uploadTime);
  console.log("time : ", uploadTime);
  return (
    <PostItemLocationAndTimeWrapper>
      <Text variant="tag_regular" content={address} />
      <Text variant="tag_regular" content="·" />
      <Text variant="tag_regular" content={time} />
    </PostItemLocationAndTimeWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem Price
 * ------------------------------------------------------------------- */

interface IPostItemPriceProps {
  price: number;
  title?: string;
  variant?: TextVariant;
}

/**
 * 가격 컴포넌트
 * @param price 가격
 * @param title `optional` 가격에 대한 타이틀
 */
const PostItemPrice = ({
  price,
  title,
  variant = "title_bold",
}: IPostItemPriceProps) => {
  return (
    <PostItemPriceWrapper>
      {title && <Text variant={variant} content={`${title}`} />}
      <Text variant={variant} content={`${price.toLocaleString()}원`} />
    </PostItemPriceWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem RemainingTime
 * ------------------------------------------------------------------- */

interface IPostItemRemainingTimeProps {
  expiredTime: string;
}

/**
 * 남은 시간 컴포넌트
 * @param expiredTime 마감일
 */
const PostItemRemainingTime = ({
  expiredTime,
}: IPostItemRemainingTimeProps) => {
  const { timeRemaining } = useRemainingTimer(expiredTime);
  return (
    <PostItemRemainingTimeWrapper>
      <Text variant="tag_regular" content="남은 시간" />
      <Text variant="tag_regular" content="·" />
      <Text
        variant="tag_regular"
        content={timeRemaining === "over" ? "종료" : timeRemaining}
      />
    </PostItemRemainingTimeWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem ButtonContainer
 * ------------------------------------------------------------------- */

interface IPostItemButtonContainerProps {
  buttonText: string;
  onTextButtonClick: () => void;
  icon?: IconType;
  onIconButtonClick?: () => void;
  disabled?: boolean;
}

/**
 * 버튼 컴포넌트를 갖고있는 컴포넌트
 * @param buttonText TextButton의 text
 * @param onTextButtonClick TextButton onClick Event
 * @param icon `optional` IconButton의 icon
 * @param onIconButtonClick `optional` IconButton onClick Event
 */
const PostItemButtonContainer = ({
  buttonText,
  onTextButtonClick,
  disabled
}: //icon,
//onIconButtonClick,
IPostItemButtonContainerProps) => {
  const handleStopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <PostItemButtonContainerWrapper onClick={handleStopPropagation}>
      <TextButton text={buttonText} onClick={onTextButtonClick} disabled={disabled} />

      {/* 채팅방 물품 정보 오른쪽 아이콘 버튼 임시 삭제(디자인시안에 존재 X) 
      {icon && <IconButton size="m" icon={icon} onClick={onIconButtonClick} />} */}
    </PostItemButtonContainerWrapper>
  );
};

/* -------------------------------------------------------------------
 * Export
 * ------------------------------------------------------------------- */

export const PostItem: typeof PostItemRoot & {
  Container: typeof PostItemContainer;
  Image: typeof PostItemImage;
  Title: typeof PostItemTitle;
  LocationAndTime: typeof PostItemLocationAndTime;
  Price: typeof PostItemPrice;
  RemainingTime: typeof PostItemRemainingTime;
  ButtonContainer: typeof PostItemButtonContainer;
} = Object.assign(PostItemRoot, {
  Container: PostItemContainer,
  Image: PostItemImage,
  Title: PostItemTitle,
  LocationAndTime: PostItemLocationAndTime,
  Price: PostItemPrice,
  RemainingTime: PostItemRemainingTime,
  ButtonContainer: PostItemButtonContainer,
});
