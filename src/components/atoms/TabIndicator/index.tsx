import type { HTMLAttributes, FC } from "react";
import { TabIndicatorWrapper } from "./styled";

export interface ITabIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** TabItem 클릭 여부 */
  isActive?: boolean;
}

export const TabIndicator: FC<ITabIndicatorProps> = ({ isActive = false }) => {
  return <TabIndicatorWrapper isActive={isActive} />;
};

