import { TermsOfServiceTemplate } from "components/templates";
import { TERMS_OF_SERVICE_TITLE } from "constants/TermsOfServicePageConstants";
import { useEffect } from "react";
import { useTopBarStore } from "stores";

export const TermsOfServicePage = () => {
  const { clear, setTitle } = useTopBarStore();
  useEffect(() => {
    clear();
    setTitle(TERMS_OF_SERVICE_TITLE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <TermsOfServiceTemplate />;
};
