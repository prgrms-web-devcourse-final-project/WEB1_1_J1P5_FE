import type { HTMLAttributes } from "react";
import { TabIndicatorWrapper } from "./styled";

export interface ITabIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** TabItem 클릭 여부 */
  isActive?: boolean;
}

export const TabIndicator = ({ isActive = false }: ITabIndicatorProps) => {
  return <TabIndicatorWrapper isActive={isActive} />;
};
