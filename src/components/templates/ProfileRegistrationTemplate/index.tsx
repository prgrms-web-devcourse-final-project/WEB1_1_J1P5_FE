import { ProfileRegistrationForm } from "components/organisms";
import type { IUser } from "types";
import { ProfileRegistrationTemplateWrapper } from "./styled";

interface IProfileRegistrationTemplateProps {
  /** Submit 이벤트 발생 시 실행할 함수 */
  onSubmit: (user: IUser) => void;
  /** User 정보 */
  user?: IUser;
}

export const ProfileRegistrationTemplate = ({
  onSubmit,
  user,
}: IProfileRegistrationTemplateProps) => {
  return (
    <ProfileRegistrationTemplateWrapper>
      <ProfileRegistrationForm onSubmit={onSubmit} user={user} />
    </ProfileRegistrationTemplateWrapper>
  );
};
