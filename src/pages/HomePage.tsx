import { useEffect } from "react";
import { useHeaderStore } from "stores";

export const HomePage = () => {
  const { setTitle } = useHeaderStore();

  useEffect(() => {
    setTitle("신림동"); // 동네 이름 받아서 처리 필요
  }, []);

  return <>HomePage</>;
};
