import * as Icons from "components/atoms/Icon";

/**
 * components/atoms/Icon에 작성된 모든 아이콘의 타입
 */
export type IconType = (typeof Icons)[keyof typeof Icons];
