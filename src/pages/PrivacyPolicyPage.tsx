import { PrivacyPolicyTemplate } from "components/templates";
import { useEffect } from "react";
import { useTopBarStore } from "stores";

export const PrivacyPolicyPage = () => {
  const { clear, setTitle } = useTopBarStore();
  useEffect(() => {
    clear();
    setTitle("개인정보 처리방침");
  }, []);

  return <PrivacyPolicyTemplate />;
};
