import { useCallback, useEffect, useRef, useState } from "react";

export const useKebabMenu = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /**
   * 메뉴 영역 외 클릭 감지해서 메뉴 닫는 함수
   * @param event : MouseEvent
   * @return void
   */
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    },
    [open, menuRef],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return {
    menuRef,
    open,
    handleOpen,
    handleClose,
  };
};
