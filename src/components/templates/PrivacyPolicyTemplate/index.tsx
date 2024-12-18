import {
  PRIVACY_POLICY,
  PRIVACY_POLICY_TITLE,
  PrivacyPolicySection,
} from "constants/PrivacyPolicyPageConstants";
import {
  PrivacyPolicyTemplateList,
  PrivacyPolicyTemplateListItem,
  PrivacyPolicyTemplateSection,
  PrivacyPolicyTemplateSectionTitle,
  PrivacyPolicyTemplateSubList,
  PrivacyPolicyTemplateSubListItem,
  PrivacyPolicyTemplateTitle,
  PrivacyPolicyTemplateWrapper,
} from "./styled";

export const PrivacyPolicyTemplate = () => {
  const renderContent = (content: PrivacyPolicySection[]) => {
    return content.map((item: PrivacyPolicySection, index: number) => (
      <PrivacyPolicyTemplateSection key={index}>
        <PrivacyPolicyTemplateSectionTitle>
          {item.title}
        </PrivacyPolicyTemplateSectionTitle>
        {item.content && (
          <PrivacyPolicyTemplateList>
            {typeof item.content === "string" ? (
              <PrivacyPolicyTemplateListItem>
                <span>{item.content}</span>
              </PrivacyPolicyTemplateListItem>
            ) : (
              Array.isArray(item.content) &&
              item.content.map(
                (
                  item: { text: string; subtitle?: string[] },
                  textIndex: number
                ) => (
                  <PrivacyPolicyTemplateListItem key={textIndex}>
                    <span>{item.text}</span>
                    {item.subtitle && (
                      <PrivacyPolicyTemplateSubList>
                        {item.subtitle.map((sub: string, subIndex: number) => (
                          <PrivacyPolicyTemplateSubListItem key={subIndex}>
                            <span>{sub}</span>
                          </PrivacyPolicyTemplateSubListItem>
                        ))}
                      </PrivacyPolicyTemplateSubList>
                    )}
                  </PrivacyPolicyTemplateListItem>
                )
              )
            )}
          </PrivacyPolicyTemplateList>
        )}
      </PrivacyPolicyTemplateSection>
    ));
  };

  return (
    <PrivacyPolicyTemplateWrapper>
      <PrivacyPolicyTemplateTitle>
        {PRIVACY_POLICY_TITLE}
      </PrivacyPolicyTemplateTitle>
      <section>{renderContent(PRIVACY_POLICY)}</section>
    </PrivacyPolicyTemplateWrapper>
  );
};
