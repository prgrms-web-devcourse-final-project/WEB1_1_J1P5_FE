import { useEffect } from "react";
import { ProfileRegistrationTemplate } from "components/templates/ProfileRegistrationTemplate";
import { useTopBarStore } from "../stores";

export const ProfileRegistrationPage = () => {
  const { setTitle } = useTopBarStore();

  useEffect(() => {
    setTitle("프로필 등록");
  }, []);

  return (
    <>
      <ProfileRegistrationTemplate onSubmit={console.log} />
    </>
  );
};
