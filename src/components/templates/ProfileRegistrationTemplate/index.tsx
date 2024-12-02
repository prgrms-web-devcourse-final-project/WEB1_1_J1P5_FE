import { ProfileRegistrationForm } from "components/organisms";
import type { IUser } from "types";
import { ProfileRegistrationTemplateWrapper } from "./styled";

interface IProfileRegistrationTemplateProps {
  /** Submit */
  onSubmit: (user: IUser) => void;
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
