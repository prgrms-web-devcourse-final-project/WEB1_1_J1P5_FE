export interface IMenu {
  /** 메뉴 이름 */
  content: string;
  /** 메뉴 아이템 클릭시 일어나는 이벤트 */
  onClick: (...args: any[]) => void;
}
