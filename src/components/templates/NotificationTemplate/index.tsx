import { NotificationList } from "components/organisms";
import { NotificationTemplateWrapper } from "./styled";
import type { INotification } from "types";

interface INotificationTemplateProps {
  /** 알림 목록 */
  notifications: INotification[];
}

export const NotificationTemplate = ({
  notifications
}: INotificationTemplateProps) => {
  return (
    <NotificationTemplateWrapper>
      <NotificationList notifications={notifications} />
    </NotificationTemplateWrapper>
  );
};

