import { type HTMLAttributes, type FC, useState } from "react";

import { ToastItemWrapper } from "./styled";
import { useTimeout } from "hooks";

interface IToastItemProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  duration: number;
  onDone: () => void;
}

export const ToastItem: FC<IToastItemProps> = ({
  message,
  duration,
  onDone
}) => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(onDone, 400);
  }, duration);

  return (
    <ToastItemWrapper style={{ opacity: show ? 1 : 0 }}>
      {message}
    </ToastItemWrapper>
  );
};

