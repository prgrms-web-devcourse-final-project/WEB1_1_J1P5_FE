import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ToastManagerWrapper } from "./styled";
import { ToastItem } from "./ToastItem";

interface IToast {
  id: string;
  message: string;
  duration: number;
}

export interface IToastManagerProps {
  bind: (createToast: (message: string, duration: number) => void) => void;
}

export const ToastManager = ({ bind }: IToastManagerProps) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const createToast = useCallback((message: string, duration: number) => {
    const newToast = {
      id: uuidv4(),
      message,
      duration
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <ToastManagerWrapper>
      {toasts.map(({ id, message, duration }) => (
        <ToastItem
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)}
        />
      ))}
    </ToastManagerWrapper>
  );
};

