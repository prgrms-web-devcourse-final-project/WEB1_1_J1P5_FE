import { TextWithImage } from "components/molecules";
import { NotificationListWrapper } from "./styled";
import type { INotification } from "types";

interface INotificationListProps {
  /** 알림 목록 */
  notifications: INotification[];
}

export const NotificationList = ({ notifications }: INotificationListProps) => {
  return (
    <NotificationListWrapper>
      {notifications.map(({ imgUrl, title, desc, onClick }, idx) => (
        <TextWithImage
          key={`n_${idx}`}
          imgUrl={imgUrl}
          title={title}
          desc={desc}
          onClick={onClick}
        />
      ))}
    </NotificationListWrapper>
  );
};
