import { useCallback, useEffect, useRef } from "react";

export const useTimeoutFn = (fn: () => void, ms = 0) => {
  const timeoutId = useRef<number | undefined>();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

