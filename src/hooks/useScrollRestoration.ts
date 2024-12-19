import { useLocation } from "react-router-dom";
import { useMemo, useCallback } from "react";

export const useScrollRestoration = (key: string) => {
  const location = useLocation();

  const isBack = useMemo(
    () => {
      const savedLocationKey = sessionStorage.getItem(`${key}_location_key`);
      return savedLocationKey === location.key;
    },
    [key, location]
  );

  const saveScroll = useCallback(
    () => {
      sessionStorage.setItem(`${key}_position`, String(window.scrollY));
      sessionStorage.setItem(`${key}_location_key`, location.key);
    },
    [key, location]
  );

  const getStoredPosition = useCallback(
    () => {
      return Number(sessionStorage.getItem(`${key}_position`)) || 0;
    },
    [key]
  );

  const clearScroll = useCallback(
    () => {
      sessionStorage.removeItem(`${key}_position`);
      sessionStorage.removeItem(`${key}_location_key`);
    },
    [key]
  );

  return {
    isBack,
    storedPosition: getStoredPosition(),
    saveScroll,
    clearScroll,
  };
};
