import { PrivacyPolicyTemplate } from "components/templates";
import { PRIVACY_POLICY_TITLE } from "constants/PrivacyPolicyPageConstants";
import { useEffect } from "react";
import { useTopBarStore } from "stores";

export const PrivacyPolicyPage = () => {
  const { clear, setTitle } = useTopBarStore();
  useEffect(() => {
    clear();
    setTitle(PRIVACY_POLICY_TITLE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PrivacyPolicyTemplate />;
};
