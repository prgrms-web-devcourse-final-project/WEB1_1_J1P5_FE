import { useState } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "services/firebase";

export const usePermission = () => {
  const [permission, setPermission] = useState(false);
  /**
   * 알림 권한을 확인하는 함수
   */
  const notification = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
        });
        console.log("FCM 토큰:", token);
        // TODO 서버에 토큰 전송
        return true;
      } else {
        console.warn("알림 권한이 거부되었습니다.");
        return false;
      }
    } catch (error) {
      console.error("토큰 발급 실패:", error);
      return false;
    }
  };
  const handleRequestPermission = async () => {
    if (!(await notification())) {
      setPermission(false);
      return false;
    }
    setPermission(true);
    return true;
  };
  return {
    permission,
    handleRequestPermission,
  };
};
