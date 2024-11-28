import { IconButton, Image, Text, TextButton } from "components/atoms";
import { getRelativeTime } from "utils";
import { useRemainingTimer } from "hooks";
import type { IconType } from "types";
import {
  PostItemButtonContainerWrapper,
  PostItemContainerWrapper,
  PostItemImageWrapper,
  PostItemLocationAndTimeWrapper,
  PostItemPriceWrapper,
  PostItemRemainingTimeWrapper,
  PostItemRootWrapper,
} from "./styled";

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
  return <Text variant="h5" content={title} />;
};

/* -------------------------------------------------------------------
 * PostItem LocationAndTime
 * ------------------------------------------------------------------- */

interface IPostItemLocationAndTimeProps {
  address: string;
  uploadTime: string;
}

/**
 * 동네와 게시일을 표시하는 컴포넌트
 * @param address 주소(동네)
 * @param uploadTime 게시일
 */
const PostItemLocationAndTime = ({
  address,
  uploadTime,
}: IPostItemLocationAndTimeProps) => {
  return (
    <PostItemLocationAndTimeWrapper>
      <Text variant="button" content={address} />
      <Text variant="button" content="·" />
      <Text variant="button" content={getRelativeTime(uploadTime)} />
    </PostItemLocationAndTimeWrapper>
  );
};

/* -------------------------------------------------------------------
 * PostItem Price
 * ------------------------------------------------------------------- */

interface IPostItemPriceProps {
  price: number;
  title?: string;
}

/**
 * 가격 컴포넌트
 * @param price 가격
 * @param title `optional` 가격에 대한 타이틀
 */
const PostItemPrice = ({ price, title }: IPostItemPriceProps) => {
  return (
    <PostItemPriceWrapper>
      {title && <Text variant="body1" content={`${title}`} />}
      <Text variant="body1" content={`${price.toLocaleString()}원`} />
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
      <Text variant="body1" content="남은 시간" />
      <Text variant="body1" content={timeRemaining} />
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
  icon,
  onIconButtonClick,
}: IPostItemButtonContainerProps) => {
  const handleStopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <PostItemButtonContainerWrapper onClick={handleStopPropagation}>
      <TextButton text={buttonText} onClick={onTextButtonClick} />
      {icon && <IconButton size="m" icon={icon} onClick={onIconButtonClick} />}
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
