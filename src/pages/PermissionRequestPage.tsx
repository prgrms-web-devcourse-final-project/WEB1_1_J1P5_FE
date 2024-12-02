import { usePermission } from "../hooks";
import { useEffect } from "react";

export const PermissionRequestPage = () => {
  const { permission, handleRequestPermission } = usePermission();

  /**
   * 권한 요청 함수
   */
  const requestPermission = () => {
    handleRequestPermission()
      .then((result) => {
        if (!result) {
          // TODO 권한 관련 메시지 alert 필요!!
          console.error("권한을 허용해주세요.");
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    // permission = false면 requestPermission 함수 실행
    if (!permission) {
      requestPermission();
    }
  }, []);
  return <>PermissionRequestPage</>;
};
