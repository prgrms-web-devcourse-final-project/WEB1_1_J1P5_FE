import { useEffect } from "react";

export const useScrollRestoration = (key: string) => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const scrollRestoration = history.scrollRestoration;
      if (scrollRestoration === "auto") {
        history.scrollRestoration = "manual";
      }

      return () => {
        if ("scrollRestoration" in history) {
          history.scrollRestoration = "auto";
        }
      };
    }
  }, []);

  const saveScroll = () => {
    sessionStorage.setItem(key, window.scrollY.toString());
  };

  const getStoredPosition = () => {
    const position = sessionStorage.getItem(key);
    return position ? Number(position) : null;
  };

  const clearScroll = () => {
    sessionStorage.removeItem(key);
  };

  return { saveScroll, getStoredPosition, clearScroll };
};
